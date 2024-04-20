import React from 'react'
import { Link } from 'react-router-dom';
import { food_list } from '../../assets/assets'
import './TrendingSection.css'

const TrendingSection = () => {
    
    const trendingItem = 8;

  return (
    <div className='recipe-trending'>
            <h2>Popular Recipes</h2>
            <Link to="/Recipe">
                <div className="trending-item-right">
                    <div className="recipe-display-list">
                        {food_list.slice(0, trendingItem).map((item) => (
                            <div className="trending-item" key={item._id}>                 
                                <div className="trending-item-image-container">
                                    <img className="trending-item-image" src={item.image} />
                                </div>
                                <a href="" className="trending-item-title">{item.name} (Rank Listed)</a>
                                <p className="trending-item-creator">By {item.creator}</p>                         
                            </div>
                        ))}
                    </div>
                </div>
            </Link>          
        </div>  
  )
}
export default TrendingSection
