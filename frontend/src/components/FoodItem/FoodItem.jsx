import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import './FoodItem.css'
import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,time, description, image}) => {


  return (
    <div className='food-item'>
        <Link to="/Recipe">
            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt="" />
              
            </div>
            <div className="food-item-info">
              <div class="container">
                  <img src={assets.rating_starts} alt="" />
                  <p className="food-item-time">{time}</p>
              </div>
                <div className="food-item-name-rating">
                  <p>{name}</p>


                </div>
                <p className="food-item-desc">{description}</p>     
            </div>      
        </Link>
        
    </div>
  )
}

export default FoodItem
