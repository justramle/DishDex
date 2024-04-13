import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Menu from './pages/Menu/Menu'

const App = () => {
  return (  //should only return 1 elements inside <></>
    <>
      <div className='app'>
        {/* add components */}
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/menu' element={<Menu/>} />
        </Routes>
      </div>
      <Footer/>
    </>
    
  )
}

export default App
