import React, { useState } from "react";

const AuditoriumCreation = () => {
  const [auditoriumName, setAuditoriumName] = useState("");
  const [location, setLocation] = useState("");
  const [ownerContact, setOwnerContact] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");      // NEW
  const [openingTime, setOpeningTime] = useState("");      // NEW
  const [closingTime, setClosingTime] = useState("");      // NEW
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle Upload
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

  // Remove image preview
  const removeImage = (i) => {
    setImages(images.filter((_, index) => index !== i));
  };

  // Submit to backend later
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("auditoriumName", auditoriumName);
    formData.append("location", location);
    formData.append("ownerContact", ownerContact);
    formData.append("capacity", capacity);
    formData.append("price", price);
    formData.append("description", description);          // NEW
    formData.append("openingTime", openingTime);          // NEW
    formData.append("closingTime", closingTime);          // NEW

    images.forEach((img) => formData.append("images", img.file));

    try {
      const response = await fetch("http://localhost:5000/api/auditorium", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit");

      alert("Auditorium created successfully!");

      setAuditoriumName("");
      setLocation("");
      setOwnerContact("");
      setCapacity("");
      setPrice("");
      setDescription("");
      setOpeningTime("");
      setClosingTime("");
      setImages([]);

    } catch (error) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 w-full">
        
      <h2 className="text-3xl font-semibold mb-6 text-gray-600 font-out ">Your own blgging platform.</h2>

      <form
        className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8  rounded-2xl border border-gray-200 mb-2"
        onSubmit={handleSubmit}
      >
        {/* Auditorium Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-500">Auditorium Name</label>
          <input
            type="text"
            value={auditoriumName}
            onChange={(e) => setAuditoriumName(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-500">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Owner Contact */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-500">Owner Contact Number</label>
          <input
            type="text"
            value={ownerContact}
            onChange={(e) => setOwnerContact(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Capacity */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-500">Capacity</label>
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-500">Price per hour (₹)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Description - NEW */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-1 text-gray-500">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        {/* Opening Time - NEW */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-500">Opening Time</label>
          <input
            type="time"
            value={openingTime}
            onChange={(e) => setOpeningTime(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Closing Time - NEW */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-500">Closing Time</label>
          <input
            type="time"
            value={closingTime}
            onChange={(e) => setClosingTime(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Images */}
        <div className="col-span-1 md:col-span-2">
          <label className="font-semibold mb-2 text-gray-500">Upload Images (Max 4) </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="border border-gray-300 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer text-gray-700"
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
                  className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition"
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
          disabled={loading}
          className="col-span-1 md:col-span-2 mt-4 bg-cyan-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-cyan-700"
        >
          {loading ? "Saving..." : "Create Auditorium"}
        </button>
      </form>
    </div>
  );
};

export default AuditoriumCreation;
