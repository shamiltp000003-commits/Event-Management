import React from 'react'
import Bannerimg from "../assets/bannerimg2.jpg"
import { IoMdArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    // ------------ OUTER WRAPPER (Centers Everything) ------------
    <div className="w-full flex items-center justify-center py-10">

      {/* ------------ MAIN CONTAINER ------------ */}
<div className='flex flex-col md:flex-row bg-gradient-to-r from-slate-300 to-slate-500 rounded-lg px-6 max-w-7xl w-full md:px-10 lg:px-20 py-6'>


        {/* -------- Left Section -------- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-4'>
          <p className='text-3xl md:text-4xl lg:text-5xl text-gray-600 font-bold leading-tight'>
            Making Your Events <br /> Memorable
          </p>

          <div className='text-gray-700 text-sm font-light'>
            <p>
              Creating unforgettable events with flawless planning and execution.
              <br className='hidden sm:block' />
              Schedule your event now.
            </p>
          </div>

          <a
            className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300'
            href="#sepeciality"
          >
            Book Now <IoMdArrowRoundForward />
          </a>
        </div>

        {/* -------- Right Section -------- */}
        <div className='md:w-1/2 flex items-center justify-center py-4'>
          <img
            className='max-w-[260px] md:max-w-[300px] lg:max-w-[350px] h-auto rounded-lg'
            src={Bannerimg}
            alt=""
          />
        </div>

      </div>

    </div>
  );
};

export default Home;
