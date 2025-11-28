import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useAppContext } from './context/AppContext'
import About from './components/About'
import Contactus from './components/Contactus'
import AdminDashboard from './pages/admin/AdminDashboard'
import ViewProviders from './pages/admin/ViewProviders'
import ManageUser from './pages/admin/ManageUser'
import SettlementHistory from './pages/admin/SettlementHistory'
import Security from './pages/admin/Security'
import AdminLayout from './pages/admin/AdminLayout'
import ProviderLayout from './pages/serviceProvider/ProviderLayout'
import ProviderDashboard from './pages/serviceProvider/ProviderDashboard'
import Bookingdetails from './pages/serviceProvider/Bookingdetails'
import AddService from './pages/serviceProvider/addService'
import Review from './pages/serviceProvider/review'
import Footer from './components/Footer'

const App = () => {
   const isAdminPath = useLocation().pathname.includes("admin")
  const {showUserLogin} = useAppContext()
  return (
    <div>
      {isAdminPath ? null : <Navbar/> }
      {showUserLogin ? <Login/> : null}
      
       <div className={`${isAdminPath ? "" : ""}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contactus/>}/>
          <Route path='/admin' element={true ? <AdminLayout/> : <AdminLayout/>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path='add-provider' element={<ViewProviders/>}/>
            <Route path='manage-user' element={<ManageUser/>}/>
            <Route path='settlement-history' element={<SettlementHistory/>}/>
            <Route path='security' element={<Security/>}/>
         </Route>

           <Route path='/provider' element={true ? <ProviderLayout/> : <ProviderLayout/>}>
            <Route index element={<ProviderDashboard/>}/>
            <Route path='add-service' element={<AddService/>}/>
            <Route path='booking-details' element={<Bookingdetails/>}/>
            <Route path='review' element={<Review/>}/>
         </Route>
        </Routes>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
