import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("username"); 

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
            <Link to="/login"><button className='login-button'>{isLoggedIn ? 'Profile' : 'Log In'}</button></Link>
        </div>
    </div>
  );
};

export default Navbar;
