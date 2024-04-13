import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import About from './pages/About/About'

const App = () => {
    return (
        <div className='app'>
        {/* add components */}
        <Navbar />
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Signup' element={<About />} />
        </Routes>
    </div>
  )
}

export default App
