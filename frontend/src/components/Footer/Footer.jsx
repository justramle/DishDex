import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h2>DishDex</h2>    
                        <div className="newsletter">
                        <p>Follow DishDex to get more recipe update</p>
                        <form>
                            <input type="email" placeholder="Your email" label="Email for newsletter" required />
                            <button type="submit">Subscribe</button>
                        </form>
                        </div>
                </div>
                <div className="footer-content-middle">
                        <ul>
                            <li><a href="#healthy-recipes">HEALTHY RECIPES</a></li>
                            <li><a href="#trending-recipes">TRENDING RECIPE</a></li>
                            <li><a href="#vegan-recipes">VEGAN RECIPES</a></li>
                            <li><a href="#fastfood-recipes">FASTFOOD RECIPES</a></li>
                            <li><a href="#special-recipes">SPECIAL RECIPES</a></li>
                        </ul>
                        
                      
                </div>
                <div className="footer-content-middle-2">
                        <ul>
                            <li><a href="#home">About Us</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#policy">Reviews</a></li>
                            <li><a href="#nutrition">Nutrition Guide</a></li>
                            <li><a href="#policy">Policy</a></li>
                        </ul>
                </div>
                <div className="footer-content-right">
                    <h4>Get In Touch</h4>
                    <p>800-222-0001</p>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
