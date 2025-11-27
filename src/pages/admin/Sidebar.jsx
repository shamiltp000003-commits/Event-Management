import React from 'react'
import { NavLink } from 'react-router-dom'
// import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6 text-gray-400'>
        <NavLink end={true} to='/admin' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bbg-cyan-800 border-r-4 border-primary"}`}>
            {/* <img src={assets.home_icon} alt="" className='min-w-4 w-5' /> */}
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>

        <NavLink  to='/admin/add-provider' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-primary"}`}>
            {/* <img src={assets.add_icon} alt="" className='min-w-4 w-5' /> */}
            <p className='hidden md:inline-block'>View Providers</p>
        </NavLink>

        <NavLink  to='/admin/manage-user' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-primary"}`}>
            {/* <img src={assets.list_icon} alt="" className='min-w-4 w-5' /> */}
            <p className='hidden md:inline-block'>Manage user</p>
        </NavLink>

        <NavLink  to='/admin/settlement-history' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-primary"}`}>
            {/* <img src={assets.comment_icon} alt="" className='min-w-4 w-5' /> */}
            <p className='hidden md:inline-block'>Settlement History</p>
        </NavLink>

        <NavLink  to='/admin/security' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-primary"}`}>
            {/* <img src={assets.comment_icon} alt="" className='min-w-4 w-5' /> */}
            <p className='hidden md:inline-block'>Scecurity</p>
        </NavLink>
    </div>
  )
}

export default Sidebar