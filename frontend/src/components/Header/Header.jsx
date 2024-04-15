import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
         <div className="header-contents">
            <h2>Welcome <span className='orange-text' style={{ color: '#f5b70a' }}>D</span>ish<span className='orange-text' style={{ color: '#f5b70a' }}>D</span>ex</h2>
            <p>Lorem ipsum dolor, m quos dolorem maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, amet consectetur adipisici.</p>
              <a href="/menu">
                  <button id="signin">View More</button>
              </a>
        </div>
        <div className="header-img">
            <img src="/logo.jpeg" alt="" className="headerImage" />
        </div>      
    </div>
   

   
  )
}

export default Header
