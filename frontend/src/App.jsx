import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import About from './pages/About/About'
import Menu from './pages/Menu/Menu'
import Footer from './components/Footer/Footer'
import Profile from './pages/Profile/Profile'

const App = () => {
    const location = useLocation();
    const hideFooterRoute = ['/Login', '/Signup'];
    const showFooter = !hideFooterRoute.includes(location.pathname);

    return (
        <div className='app'>
        {/* add components */}
        <Navbar />
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/About' element={<About />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/Profile' element={<Profile />} />
                
        </Routes>
        {showFooter && <Footer />}
        </div>

  )
}

export default App
