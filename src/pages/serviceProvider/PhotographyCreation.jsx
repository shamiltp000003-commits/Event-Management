import React, { useState } from "react";

const PhotographyCreation = () => {
  // Main details
  const [studioName, setStudioName] = useState("");
  const [photographerName, setPhotographerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");

  const [pricePerDay, setPricePerDay] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");

  // Service Types
  const [serviceTypes, setServiceTypes] = useState([]);

  const toggleServiceType = (type) => {
    if (serviceTypes.includes(type)) {
      setServiceTypes(serviceTypes.filter((t) => t !== type));
    } else {
      setServiceTypes([...serviceTypes, type]);
    }
  };

  // Portfolio images
  const [images, setImages] = useState([]);

  const handlePortfolioUpload = (e) => {
    const files = Array.from(e.target.files);

    const preview = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages([...images, ...preview]);
  };

  const removeImage = (i) => {
    setImages(images.filter((_, index) => index !== i));
  };

  // Packages
  const [packages, setPackages] = useState([]);
  const [packageName, setPackageName] = useState("");
  const [packageDescription, setPackageDescription] = useState("");
  const [packagePrice, setPackagePrice] = useState("");

  const addPackage = () => {
    if (!packageName || !packageDescription || !packagePrice) {
      alert("Fill all package fields");
      return;
    }

    const newPkg = {
      name: packageName,
      description: packageDescription,
      price: packagePrice,
    };

    setPackages([...packages, newPkg]);
    setPackageName("");
    setPackageDescription("");
    setPackagePrice("");
  };

  const removePackage = (i) => {
    setPackages(packages.filter((_, index) => index !== i));
  };

  const [loading, setLoading] = useState(false);

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("studioName", studioName);
    formData.append("photographerName", photographerName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("location", location);
    formData.append("description", description);

    formData.append("openingTime", openingTime);
    formData.append("closingTime", closingTime);

    formData.append("pricePerDay", pricePerDay);
    formData.append("pricePerHour", pricePerHour);

    formData.append("serviceTypes", JSON.stringify(serviceTypes));
    formData.append("packages", JSON.stringify(packages));

    images.forEach((img) => formData.append("portfolioImages", img.file));

    try {
      const res = await fetch("http://localhost:5000/api/photography", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed");

      alert("Photography Service Created Successfully!");

      // Reset form
      setStudioName("");
      setPhotographerName("");
      setPhone("");
      setEmail("");
      setLocation("");
      setDescription("");
      setPackages([]);
      setServiceTypes([]);
      setImages([]);
      setOpeningTime("");
      setClosingTime("");
      setPricePerDay("");
      setPricePerHour("");

    } catch (err) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-3xl font-medium mb-6 text-gray-600">
        Create Photography Service
      </h2>

      <form
        className="bg-white p-8  rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        {/* Studio Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-600">Studio / Company Name</label>
          <input
            className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600 "
            value={studioName}
            onChange={(e) => setStudioName(e.target.value)}
            required
          />
        </div>

        {/* Photographer Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-600">Photographer Name</label>
          <input
            className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={photographerName}
            onChange={(e) => setPhotographerName(e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-600">Phone Number</label>
          <input
            className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-600">Email</label>
          <input
            className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-600">Location</label>
          <input
            className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label className="font-semibold mb-1 text-gray-600">About Your Service</label>
          <textarea
            rows={4}
            className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Opening & Closing Time */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-600">Opening Time</label>
          <input
            type="time"
            className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={openingTime}
            onChange={(e) => setOpeningTime(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-600">Closing Time</label>
          <input
            type="time"
            className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={closingTime}
            onChange={(e) => setClosingTime(e.target.value)}
            required
          />
        </div>

        {/* Pricing */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-600">Price Per Day (₹)</label>
          <input
            type="number"
            className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={pricePerDay}
            onChange={(e) => setPricePerDay(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-600">Price Per Hour (₹)</label>
          <input
            type="number"
            className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
            value={pricePerHour}
            onChange={(e) => setPricePerHour(e.target.value)}
            required
          />
        </div>

        {/* Service Types */}
        <div className="col-span-1 md:col-span-2">
          <label className="font-semibold mb-2 text-gray-600">Photography Services Offered</label>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
            {[
              "Wedding",
              "Engagement",
              "Candid",
              "Traditional",
              "Drone",
              "Video Coverage",
              "Baby Shoot",
              "Maternity",
              "Birthday",
              "Corporate",
              "Pre-Wedding"
            ].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                    className="text-gray-600"
                  type="checkbox"
                  checked={serviceTypes.includes(type)}
                  onChange={() => toggleServiceType(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="col-span-1 md:col-span-2 mt-4">
          <h3 className="text-xl font-bold mb-2 text-gray-600">Add Packages</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              placeholder="Package Name"
              className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
            />

            <input
              placeholder="Description"
              className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
              value={packageDescription}
              onChange={(e) => setPackageDescription(e.target.value)}
            />

            <input
              placeholder="Price (₹)"
              className="border-2 border-gray-400 outline-none p-3 rounded-xl text-gray-600"
              type="number"
              value={packagePrice}
              onChange={(e) => setPackagePrice(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={addPackage}
            className="mt-3 bg-cyan-700 text-white px-6 py-2 rounded-xl hover:bg-cyan-800 transition-colors duration-300"
          >
            + Add Package
          </button>

          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 mt-2 rounded-xl"
            >
              <div>
                <p className="font-semibold">{pkg.name}</p>
                <p className="text-gray-600 text-sm">{pkg.description}</p>
                <p className="text-blue-600 font-bold">₹{pkg.price}</p>
              </div>

              <button
                onClick={() => removePackage(index)}
                className="bg-red-600 text-white px-3 py-1 rounded-lg"
              >
                X
              </button>
            </div>
          ))}
        </div>

        {/* Portfolio Images */}
        <div className="col-span-1 md:col-span-2 mt-6">
          <label className="font-semibold mb-2 text-gray-600">Upload Portfolio Images  </label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="border-2 border-gray-400 outline-none p-3 rounded-xl bg-gray-50 text-gray-600"
            onChange={handlePortfolioUpload}
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {images.map((img, index) => (
              <div key={index} className="relative group">
                <img
                  src={img.preview}
                  className="h-32 w-full object-cover rounded-xl shadow"
                />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100"
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
          className="col-span-1 md:col-span-2 mt-6 bg-cyan-700 text-white py-3 rounded-xl text-lg font-semibold hover:bg-cyan-800 transition-colors duration-300"
        >
          {loading ? "Saving..." : "Create Photography Service"}
        </button>
      </form>
    </div>
  );
};

export default PhotographyCreation;
