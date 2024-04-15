import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    // state varibles
    let menu, setMenu;
    let location = useLocation();
    switch (location.pathname) {
        case '/profile':
            [menu, setMenu] = useState("profile");
            break;
        case '/':
            [menu, setMenu] = useState("home");
            break;
        case '/menu':
            [menu, setMenu] = useState("menu");
            break;
        case '/About':
            [menu, setMenu] = useState("about us");
            break;
        default:
            [menu, setMenu] = useState("All");
            break;
    }

  return (
    <div className='navbar'>
        {/* <img src={assets.logo} alt="" className="logo" /> */}
        <h1>DishDex</h1>
        <ul className="navbar-menu">
            {/* check if class is active */}
            <Link to='/' onClick={() => setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <Link to='/menu' onClick={() => setMenu("menu")}className={menu==="menu"?"active":""}>menu</Link>
            <Link to='/About' onClick={() => setMenu("about us")} className={menu === "about us" ? "active" : ""}>about us</Link>

              { localStorage.getItem("username") == null
                ? <Link></Link>
                  : <Link to='/Profile' onClick={() => setMenu("profile")} className={menu === "profile" ? "active" : ""}>profile</Link>
              }

          </ul>
        <div className="navbar-right">
              <img src={assets.search_icon} alt="" />
                
                  {
                      localStorage.getItem("username") == null
                          ? <a href="/Login"><button id="signin">sign in</button></a>
                          : <a href="/"><button id="signout" onClick={() => localStorage.removeItem("username")  }>sign out</button></a>
                    }

              
        </div>
    </div>
  )
}

export default Navbar
