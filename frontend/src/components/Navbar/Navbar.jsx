import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

    // state varibles
    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        {/* <img src={assets.logo} alt="" className="logo" /> */}
        <h1>DishDex</h1>
        <ul className="navbar-menu">
            {/* check if class is active */}
            <Link to='/' onClick={() => setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <Link to='/menu' onClick={() => setMenu("menu")}className={menu==="menu"?"active":""}>menu</Link>
            <li onClick={() => setMenu("about us")}className={menu==="about us"?"active":""}>about us</li>
            <a href='#footer' onClick={() => setMenu("account")}className={menu==="account"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <a href="/Login">
                  <button id="signin">sign in</button>
            </a>
        </div>
    </div>
  )
}

export default Navbar
