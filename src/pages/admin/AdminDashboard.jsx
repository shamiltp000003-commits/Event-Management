import React, { useEffect, useState } from 'react'
import { adminDashboard_data } from '../../constants/data'

const AdminDashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    Totalusers: 0,
    Totalproviders: 0,
    Totalbookings: 0,
    registrations: 0,
    feedbackReceived: 0
  })

  const fetchDashboard = async () => {
    setDashboardData(adminDashboard_data)
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>

      <div className='flex flex-wrap gap-4'>
        
        {/* Total Users */}
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.Totalusers}</p>
            <p className='text-gray-400 font-light'>Total Users</p>
          </div>
        </div>

        {/* Total Providers */}
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.Totalproviders}</p>
            <p className='text-gray-400 font-light'>Total Providers</p>
          </div>
        </div>

        {/* Total Bookings */}
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.Totalbookings}</p>
            <p className='text-gray-400 font-light'>Total Bookings</p>
          </div>
        </div>

        {/* Registrations */}
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.registrations}</p>
            <p className='text-gray-400 font-light'>Registrations</p>
          </div>
        </div>

        {/* Feedback Received */}
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.feedbackReceived}</p>
            <p className='text-gray-400 font-light'>Feedback Received</p>
          </div>
        </div>

      </div>

      {/* ------- Latest Blogs Table ------- */}
      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <p>Latest Bookings</p>
        </div>

        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg bg-white'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-gray-600 text-left uppercase'>
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                <th scope='col' className='px-2 py-4'>Bookings</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                <th scope='col' className='px-2 py-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamic blog table goes here */}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default AdminDashboard
