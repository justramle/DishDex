import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
         <div className="header-contents">
            <h2>Welcome <span className='orange-text' style={{ color: '#f5b70a' }}>D</span>ish<span className='orange-text' style={{ color: '#f5b70a' }}>D</span>ex</h2>
            <p>Our mission is to share flavorful recipes from around the world, 
              celebrating all kinds of ingredients from those who love food. 
              We bring them together.</p>
              <a href="/menu">
                  <button className="view-more">View More</button>
              </a>
        </div>
        <div className="header-img">
            <img src="/bg2.jpeg" alt="" className="headerImage" />
        </div>      
    </div>
     
  )
}

export default Header
