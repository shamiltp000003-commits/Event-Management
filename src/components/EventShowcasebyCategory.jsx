import { useParams } from "react-router-dom";
import { auditoriumServices, cateringServices, decorationServices, photographyServices } from "../constants/data";

// import all services

const EventShowcasebyCategory = () => {
  const { category } = useParams();

  // combine all services
  const allServices = [
    ...auditoriumServices,
    ...cateringServices,
    ...decorationServices,
    ...photographyServices,
  ];

  // filter by category slug
  const filteredServices = allServices.filter(
    (service) => service.category === category
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 capitalize text-gray-700">
        {category.replace("-", " ")} Services
      </h2>

      {filteredServices.length === 0 ? (
        <p className="text-gray-500">No services found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.images?.[0]}
                alt={item.name || item.companyName}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {item.auditoriumName ||
                    item.companyName ||
                    item.studioName}
                </h3>

                <p className="text-sm text-gray-500">{item.location}</p>

                <p className="text-sm mt-2 text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventShowcasebyCategory;
