import React from "react";
import Bannerimg from "../assets/bannerimg2.jpg";
import { IoMdArrowRoundForward } from "react-icons/io";
import RotatingText from "./RotatingText";

const Home = () => {
  return (
    // ------------ OUTER WRAPPER (Centers Everything) ------------
    <div className="w-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 font-mont">
      {/* ------------ MAIN CONTAINER ------------ */}
      <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#1B004D] to-[#2E0A6F] rounded-xl px-6 max-w-[1440px] w-full md:px-10 lg:px-20 py-6">
        {/* -------- Left Section -------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-8 py-4">
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-bold leading-tight">
            Making Your Events <br /> Memorable
          </p>

          <div className="text-gray-300 text-sm font-light">
            <p>
              Creating unforgettable events with flawless planning and
              execution.
              <br className="hidden sm:block" />
              Schedule your event now.
            </p>
          </div>
          <RotatingText
            texts={["Wedding", "Auditorium", "Catering", "Photography"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-blue-600 text-white font-bold text-md md:text-2xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg max-w-[120px] w-full md:max-w-[250px] md:w-full"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />

          <a
            className="flex items-center gap-2 border border-gray-300 px-6  md:px-8 py-2 md:py-3 rounded-full text-gray-200 text-xs md:text-sm hover:scale-105 transition-all duration-300"
            href="#sepeciality"
          >
            Book Now <IoMdArrowRoundForward />
          </a>
        </div>

        {/* -------- Right Section -------- */}
        <div className="md:w-1/2 flex items-center justify-center py-4">
          <img
            className="max-w-[260px] md:max-w-[300px] lg:max-w-[350px] h-auto rounded-lg"
            src={Bannerimg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
