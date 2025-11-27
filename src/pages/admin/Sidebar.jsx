
 
import React, { useState } from "react";
import { Menu, X, Users, UserCheck, Wallet, Shield } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`${open ? "w-64" : "w-16"} bg-gray-900 text-white min-h-screen p-4 transition-all duration-300`}>
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className={`${open ? "text-xl font-bold" : "hidden"}`}>Admin</h1>
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu */}
        <ul className="mt-8 space-y-4">

          {/* View Providers */}
          <li className="flex items-center gap-3 hover:bg-gray-700 cursor-pointer p-2 rounded-md">
            <Users size={20} />
            {open && <span>View Providers</span>}
          </li>

          {/* View Users */}
          <li className="flex items-center gap-3 hover:bg-gray-700 cursor-pointer p-2 rounded-md">
            <UserCheck size={20} />
            {open && <span>View Users</span>}
          </li>

          {/* Settlement History */}
          <li className="flex items-center gap-3 hover:bg-gray-700 cursor-pointer p-2 rounded-md">
            <Wallet size={20} />
            {open && <span>Settlement History</span>}
          </li>

          {/* Security */}
          <li className="flex items-center gap-3 hover:bg-gray-700 cursor-pointer p-2 rounded-md">
            <Shield size={20} />
            {open && <span>Security</span>}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold">Main Content</h2>
        <p>Add your content here...</p>
      </div>
    </div>
  );
};

export default Sidebar;
      

