import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("username"); 

    const logmeout = (event) => {
        localStorage.removeItem("username");
        localStorage.removeItem("myrecipes");
        localStorage.removeItem("onlymyrecipes");
        localStorage.removeItem("savedrecipes");
    }

  return (
    <div className='navbar'>
        <Link to="/">
        <h1><span className='orange-text' style={{ color: '#f5b70a' }}>D</span>ish<span className='orange-text' style={{ color: '#f5b70a' }}>D</span>ex</h1>      
        </Link>
        <ul className="navbar-menu">
            <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
            <li className={location.pathname === '/menu' ? 'active' : ''}><Link to="/menu">Menu</Link></li>
            <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">About Us</Link></li>
            {isLoggedIn && <li className={location.pathname === '/profile' ? 'active' : ''}><Link to="/profile">Profile</Link></li>}
      
        </ul>
        <div className="navbar-right">
            {
                localStorage.getItem("username") == null
                    ? <a href="/Login"><button id="signin">Log In</button></a>
                      : <a href="/"><button id="signout" onClick={logmeout}>Log Out</button></a>
            }
        </div>
    </div>
  );
};

export default Navbar;
