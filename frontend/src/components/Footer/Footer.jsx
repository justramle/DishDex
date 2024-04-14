import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h2>DishDex</h2>
                    <p>Follow DishDex to get more recipe update</p>
                    <div className="socialIcon">
                        <img src={assets.search_icon} alt="" />
                    </div>
                </div>
                <div className="footer-contetn-right">
                    <h2>Get In Touch</h2>
                    <p>dishdex@cook.io</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
