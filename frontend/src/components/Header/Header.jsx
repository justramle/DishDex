import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
         <div className="header-contents">
            <h2>Welcome dishdex</h2>
            <p>Lorem ipsum dolor, m quos dolorem maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, amet consectetur adipisici.</p>
            <button>View More</button>
        </div>
        <div className="header-img">
            <img src="/main_img.png" alt="" className="headerImage" />
        </div>      
    </div>
   

   
  )
}

export default Header
