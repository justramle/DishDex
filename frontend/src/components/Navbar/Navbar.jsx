import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {

    // state varibles
    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        {/* <img src={assets.logo} alt="" className="logo" /> */}
        <h1>DishDex</h1>
        <ul className="navbar-menu">
            {/* check if class is active */}
            <li onClick={() => setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick={() => setMenu("menu")}className={menu==="menu"?"active":""}>menu</li>
            <li onClick={() => setMenu("about us")}className={menu==="about us"?"active":""}>about us</li>
            <li onClick={() => setMenu("account")}className={menu==="account"?"active":""}>account</li>


        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <button>sign in</button>
            
        </div>
    </div>
  )
}

export default Navbar
