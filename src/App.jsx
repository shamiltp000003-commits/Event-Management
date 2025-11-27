import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useAppContext } from './context/AppContext'
import About from './components/About'
import Contactus from './components/Contactus'

const App = () => {
   const isAdminPath = useLocation().pathname.includes("admin")
  const {showUserLogin} = useAppContext()
  return (
    <div>
      {isAdminPath ? null : <Navbar/> }
      {showUserLogin ? <Login/> : null}
      
       <div className={`${isAdminPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contactus/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App
