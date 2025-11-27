import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import searchicon from "../assets/search.svg"
import menuicon from "../assets/menuicon.svg"
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {user, setUser, setShowUserLogin, navigate} = useAppContext();

   const logout = async () => {
          setUser(null);
          navigate('/')
      }
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <p className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent text-3xl font-bold">
          WedCraft
        </p>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/allevents">All Events</NavLink>
        {user && 
            <NavLink to="/allevents">All Bookings</NavLink>
        }
        {/* search event */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Event"
          />
          <img src={searchicon} alt="" />
        </div>

        {!user ? (
                    <button onClick={()=> 
                        setShowUserLogin(true)
                    } className="cursor-pointer px-8 py-2 bg-indigo-400 hover:bg-indigo-600 transition text-white rounded-full">
                    Login
                </button>
                ) : (
                    <div className='relative group'>
                        <img src={assets.profile_icon} alt="" className='w-10' />
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-400 py-2.5 w-30 rounded-md text-sm'>
                            <li onClick={()=> navigate("")} className='p-1.5 pl-3 hover:bg-blue-400 cursor-pointer'>My profile</li>
                            <li onClick={logout} className='p-1.5 pl-3 hover:bg-blue-400 cursor-pointer'>Logout</li>
                        </ul>
                    </div>
                )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <img src={menuicon} alt="" />
      </button>

      {/* Mobile Menu */}
      <div
  className={`
    fixed top-[60px] left-0 h-screen w-[300px] bg-white shadow-md py-4 px-5 
    flex-col items-start gap-[40px] text-sm md:hidden
    transform transition-all duration-300 ease-in-out
    ${open ? "translate-x-0 opacity-100 flex" : "-translate-x-full opacity-0 hidden"}
  `}
>
  <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
  <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>
  <NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink>
  <NavLink onClick={() => setOpen(false)} to="/allevents">All events</NavLink>

  {!user ? (
    <button
      onClick={() => {
        setOpen(false);
        setShowUserLogin(true);
      }}
      className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
    >
      Login
    </button>
  ) : (
    <button
      onClick={logout}
      className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
    >
      Logout
    </button>
  )}
</div>

    </nav>
  );
};

export default Navbar;
