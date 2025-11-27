import React from "react";

const Home = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Auditorium ",
      date: "Jan 20, 2025",
      location: "New Delhi",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 2,
      title: "Catering",
      date: "Feb 10, 2025",
      location: "Mumbai",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 3,
      title: "Decoration",
      date: "Mar 5, 2025",
      location: "Bengaluru",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 4,
      title: "Photography",
      date: "Mar 5, 2025",
      location: "Bengaluru",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Discover & Manage Events Effortlessly
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Find events around you or create your own with just a few clicks.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100">
            Explore Events
          </button>
          <button className="bg-indigo-800 px-6 py-3 rounded-lg font-medium shadow hover:bg-indigo-900">
            Create Event
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-8 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Event Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Auditorium", "Catering", "decoration", "photography"].map((cat) => (
            <div
              key={cat}
              className="bg-white shadow rounded-lg p-6 text-center hover:shadow-lg cursor-pointer"
            >
              <p className="text-lg font-semibold">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="px-8 py-16 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-10">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm">📅 {event.date}</p>
                <p className="text-gray-600 text-sm">📍 {event.location}</p>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to host your own event?</h2>
        <p className="mt-3 text-gray-600">
          Create and publish your event in minutes.
        </p>
        <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
          Create Event
        </button>
      </section>
    </div>
  );
};

export default Home;
