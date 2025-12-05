import React, { useState } from "react";

const StageDecorationCreation = () => {
  // Main details
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [decorations, setDecorations] = useState([]);

  // Decoration item fields
  const [decTitle, setDecTitle] = useState("");
  const [decDescription, setDecDescription] = useState("");
  const [decPrice, setDecPrice] = useState("");
  const [decImage, setDecImage] = useState(null);
  const [decImagePreview, setDecImagePreview] = useState(null);

  const [loading, setLoading] = useState(false);

  // Handle decoration image upload
  const handleDecorationImage = (e) => {
    const file = e.target.files[0];
    setDecImage(file);
    setDecImagePreview(URL.createObjectURL(file));
  };

  // Add a decoration item
  const addDecoration = () => {
    if (!decTitle || !decDescription || !decPrice || !decImage) {
      alert("Fill all decoration fields before adding!");
      return;
    }

    const newItem = {
      title: decTitle,
      description: decDescription,
      price: decPrice,
      image: decImage,
      preview: decImagePreview,
    };

    setDecorations([...decorations, newItem]);

    // Reset the decoration builder
    setDecTitle("");
    setDecDescription("");
    setDecPrice("");
    setDecImage(null);
    setDecImagePreview(null);
  };

  // Remove decoration
  const removeDecoration = (index) => {
    setDecorations(decorations.filter((_, i) => i !== index));
  };

  // Handle full form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("companyName", companyName);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("description", description);

    // decorations (complex nested array)
    const decData = decorations.map((item, index) => {
      formData.append("decorationImages", item.image); // collect all images
      return {
        title: item.title,
        description: item.description,
        price: item.price,
      };
    });

    formData.append("decorations", JSON.stringify(decData));

    try {
      const response = await fetch("http://localhost:5000/api/stage-decoration", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed");

      alert("Stage Decoration Service Created!");

      // Reset everything
      setCompanyName("");
      setAddress("");
      setPhone("");
      setDescription("");
      setDecorations([]);

    } catch (err) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-600">
        Create Stage Decoration Service
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Company Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-500">Company Name</label>
          <input
            className="border border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-500">Address</label>
          <input
            className="border border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-500">Phone Number</label>
          <input
            className="border border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Main Description */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label className="font-semibold mb-1 text-gray-500">About the Decoration Service</label>
          <textarea
            rows={4}
            className="border border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* DECORATION BUILDER */}
        <div className="col-span-1 md:col-span-2 mt-4">
          <h3 className="text-xl font-bold mb-3 text-gray-500">Add Decoration Designs</h3>

          {/* Decoration Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              placeholder="Decoration Title"
              className="border border-gray-400 outline-none p-3 rounded-xl text-gray-600"
              value={decTitle}
              onChange={(e) => setDecTitle(e.target.value)}
            />

            <input
              placeholder="Description"
              className="border border-gray-400 outline-none p-3 rounded-xl text-gray-600"
              value={decDescription}
              onChange={(e) => setDecDescription(e.target.value)}
            />

            <input
              placeholder="Price"
              type="number"
              className="border border-gray-400 outline-none p-3 rounded-xl text-gray-600"
              value={decPrice}
              onChange={(e) => setDecPrice(e.target.value)}
            />

            <input
              type="file"
              accept="image/*"
              className="border border-gray-400 outline-none p-3 rounded-xl bg-gray-50 text-gray-600"
              onChange={handleDecorationImage}
            />
          </div>

          {/* Image Preview */}
          {decImagePreview && (
            <img
              src={decImagePreview}
              className="h-32 mt-3 rounded-xl shadow-md object-cover"
            />
          )}

          {/* Add Button */}
          <button
            type="button"
            onClick={addDecoration}
            className="mt-3 bg-cyan-800 text-white px-6 py-2 rounded-xl hover:bg-cyan-700"
          >
            + Add Decoration
          </button>

          {/* Decorations List Preview */}
          <div className="mt-4">
            {decorations.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-xl mb-2"
              >
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-blue-600 font-bold">₹{item.price}</p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={item.preview}
                    className="h-20 w-24 object-cover rounded-xl shadow"
                  />
                  <button
                    onClick={() => removeDecoration(index)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="col-span-1 md:col-span-2 mt-6 bg-cyan-800 text-white py-3 rounded-xl text-lg font-semibold hover:bg-cyan-900"
        >
          {loading ? "Saving..." : "Create Stage Decoration Service"}
        </button>
      </form>
    </div>
  );
};

export default StageDecorationCreation;


//info
//mounted in app.jsx