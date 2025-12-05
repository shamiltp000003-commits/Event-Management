import { NavLink } from "react-router-dom";
import { TbBuildingBank } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { BiSolidMagicWand } from "react-icons/bi";
import { IoCameraOutline } from "react-icons/io5";


const CategorySection = () => {
  const categories = [
    { name: "Auditorium", icon: <TbBuildingBank size={32} /> ,slug:"auditorium" },
    { name: "Catering", icon: <GiKnifeFork size={32} />, slug:"catering" },
    { name: "Decoration", icon: <BiSolidMagicWand size={32} />, slug:"decoration" },
    { name: "Photography", icon: <IoCameraOutline size={32} />, slug:"photography" }
  ];

  return (
    <div className="py-10 px-4 max-w-[1440px] mx-auto">
      <h2 className="text-2xl font-bold text-gray-500 mb-6">Choose Your Service</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <NavLink
            key={i}
            to={`/services/${cat.slug}`}
            className="bg-gradient-to-r from-[#1B004D] to-[#2E0A6F] p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 cursor-pointer transition-all flex flex-col items-center gap-3 text-gray-200"
          >
            {cat.icon}
            <p className="font-semibold">{cat.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
