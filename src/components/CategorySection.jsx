import { NavLink } from "react-router-dom";
import { TbBuildingBank } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { BiSolidMagicWand } from "react-icons/bi";
import { IoCameraOutline } from "react-icons/io5";

import Bannerimg from "../assets/bannerimg2.jpg";
import Mainbg from "../assets/mainbg2.jpg";
import Mainbg2 from "../assets/mainbg3.jpg";
import decor from "../assets/decoration1.jpg";
import photogrpher from "../assets/photogrpher.jpg";
import Title from "./Title";

const CategorySection = () => {
  const categories = [
    {
      name: "Auditorium",
      icon: <TbBuildingBank size={22} />,
      slug: "auditorium",
      image: Mainbg,
    },
    {
      name: "Catering",
      icon: <GiKnifeFork size={22} />,
      slug: "catering",
      image: Mainbg2,
    },
    {
      name: "Decoration",
      icon: <BiSolidMagicWand size={22} />,
      slug: "decoration",
      image: decor,
    },
    {
      name: "Photography",
      icon: <IoCameraOutline size={22} />,
      slug: "photography",
      image: photogrpher,
    },
  ];

  return (
    <div className="py-10 px-4 max-w-[1440px] mx-auto">
      {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h2> */}
      <Title
          title="Our Featured Services" 
          subTitle="Explore the best services we have to offer, tailored just for you." 
        />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <NavLink
            key={i}
            to={`/services/${cat.slug}`}
            className="relative w-full rounded-xl overflow-hidden bg-white 
              text-gray-700 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 group"
          >
            {/* IMAGE */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* BADGE */}
            <p className="absolute top-3 left-3 bg-white text-gray-900 text-xs px-3 py-1 rounded-full shadow">
              {cat.name}
            </p>

            {/* CONTENT */}
            <div className="p-4 flex items-center justify-between">
              <p className="text-lg font-semibold text-gray-900">{cat.name}</p>
              <div className="p-2 bg-gray-200 rounded-full text-gray-600">
                {cat.icon}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
