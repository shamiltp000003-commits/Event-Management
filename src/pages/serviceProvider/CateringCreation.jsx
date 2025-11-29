import React, { useState } from "react";

const CateringCreation = () => {
  // Main form fields
  const [companyName, setCompanyName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [description, setDescription] = useState("");

  const [cateringType, setCateringType] = useState("veg");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");

  // Images
  const [images, setImages] = useState([]);

  // Dynamic menu items
  const [menuItems, setMenuItems] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [foodType, setFoodType] = useState("veg");
  const [foodPrice, setFoodPrice] = useState("");

  const [loading, setLoading] = useState(false);

  // Image handling
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 4) {
      alert("You can upload only 4 images.");
      return;
    }

    const previewImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...previewImages]);
  };

  const removeImage = (i) => {
    setImages(images.filter((_, index) => index !== i));
  };

  // Add dynamic food item
  const addFoodItem = () => {
    if (!foodName || !foodCategory || !foodPrice) {
      alert("Fill all food fields before adding!");
      return;
    }

    setMenuItems([
      ...menuItems,
      {
        name: foodName,
        category: foodCategory,
        type: foodType,
        price: foodPrice,
      },
    ]);

    setFoodName("");
    setFoodCategory("");
    setFoodType("veg");
    setFoodPrice("");
  };

  const removeFoodItem = (index) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("companyName", companyName);
    formData.append("ownerName", ownerName);
    formData.append("contactNumber", contactNumber);
    formData.append("description", description);
    formData.append("cateringType", cateringType);
    formData.append("openingTime", openingTime);
    formData.append("closingTime", closingTime);

    // Menu items array
    formData.append("menu", JSON.stringify(menuItems));

    // Images
    images.forEach((img) => formData.append("images", img.file));

    try {
      const response = await fetch("http://localhost:5000/api/catering", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed");

      alert("Catering service created!");

      // Reset all fields
      setCompanyName("");
      setOwnerName("");
      setContactNumber("");
      setDescription("");
      setOpeningTime("");
      setClosingTime("");
      setCateringType("veg");
      setMenuItems([]);
      setImages([]);

    } catch (err) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-500">Create Catering Service</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Company Name */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-gray-500">Company Name</label>
          <input
            className="border border-gray-300 p-2 md:p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        {/* Owner Name */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-gray-500">Owner Name</label>
          <input
            className="border border-gray-300 p-2 md:p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </div>

        {/* Contact Number */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-gray-500">Contact Number</label>
          <input
            className="border border-gray-300 p-2 md:p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>

        {/* Catering Type */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-gray-500">Catering Type</label>
          <select
            className="border border-gray-300 p-2 md:p-3 rounded-xl text-gray-600"
            value={cateringType}
            onChange={(e) => setCateringType(e.target.value)}
          >
            <option value="veg">Veg Only</option>
            <option value="non-veg">Non-Veg Only</option>
            <option value="both">Veg & Non-Veg</option>
          </select>
        </div>

        {/* Description */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label className="font-medium mb-1 text-gray-500">Description</label>
          <textarea
            rows={4}
            className="border border-gray-300 p-2 md:p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Opening Time */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-gray-500">Opening Time</label>
          <input
            type="time"
            className="border border-gray-300 text-gray-500 p-2 md:p-3 rounded-xl focus:ring-2 focus:ring-blue-700 outline-none"
            value={openingTime}
            onChange={(e) => setOpeningTime(e.target.value)}
            required
          />
        </div>

        {/* Closing Time */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-gray-500">Closing Time</label>
          <input
            type="time"
            className="border border-gray-300 text-gray-700 p-2 md:p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            value={closingTime}
            onChange={(e) => setClosingTime(e.target.value)}
            required
          />
        </div>

        {/* FOOD ITEM BUILDER */}
        <div className="col-span-1 md:col-span-2 mt-4">
          <h3 className="text-xl font-bold mb-3 text-gray-500">Add Food Items</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              placeholder="Food Name"
              className="border p-2 md:p-3 rounded-xl outline-none border-gray-300 text-gray-700"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />

            <input
              placeholder="Category (Starter, Dessert, etc.)"
              className="border p-2 md:p-3 rounded-xl outline-none border-gray-300 text-gray-700"
              value={foodCategory}
              onChange={(e) => setFoodCategory(e.target.value)}
            />

            <select
              className="border p-2 md:p-3 rounded-xl outline-none border-gray-300 text-gray-700"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
            >
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
            </select>

            <input
              placeholder="Price"
              type="number"
              className="border p-2 md:p-3 rounded-xl outline-none border-gray-300 text-gray-600"
              value={foodPrice}
              onChange={(e) => setFoodPrice(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={addFoodItem}
            className="mt-3 bg-cyan-600 text-white px-6 py-2 rounded-xl hover:bg-cyan-700"
          >
            + Add Food
          </button>

          {/* Food list preview */}
          <div className="mt-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-xl mb-2"
              >
                <span>
                  {item.name} — {item.category} — {item.type} — ₹{item.price}
                </span>

                <button
                  onClick={() => removeFoodItem(index)}
                  className="bg-red-600 text-white px-3 py-1 rounded-lg"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="col-span-1 md:col-span-2 mt-4 flex items-center gap-2">
          <label className="font-semibold mb-2 text-gray-700">Upload Images (Max 4)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 md:p-3 rounded-xl bg-gray-50 text-gray-600 border-gray-300"
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {images.map((img, index) => (
              <div key={index} className="relative group">
                <img
                  src={img.preview}
                  className="h-32 w-full object-cover rounded-xl shadow-md"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="col-span-1 md:col-span-2 mt-6 bg-cyan-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-cyan-700"
        >
          {loading ? "Saving..." : "Create Catering Service"}
        </button>
      </form>
    </div>
  );
};

export default CateringCreation;
