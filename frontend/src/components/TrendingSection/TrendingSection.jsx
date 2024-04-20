import React from 'react'
// import FoodItem from '../FoodItem/FoodItem'
import { food_list } from '../../assets/assets'

import './TrendingSection.css'

const TrendingSection = () => {
    
    const trendingItem = 8;

  return (
    <div className='recipe-trending'>
            <h2>The Latest Recipes</h2>
            <div className="recipe-display-list">
                {food_list.slice(0, trendingItem).map((item) => (
                    <div className="trending-item" key={item._id}>
                        <div className="trending-item-image-container">
                            <img 
                                className="trending-item-image" 
                                src={item.image} 
                                // alt={item.name} 
                            />
                        </div>
                        <h3 className="trending-item-title">{item.name}</h3>
                        <p className="trending-item-creator">By {item.creator}</p> 
                    </div>
                ))}
            </div>
        </div>
    
  )
}

export default TrendingSection
