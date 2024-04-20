import React from 'react'
import { Link } from 'react-router-dom';
import { food_list } from '../../assets/assets'
import './TrendingSection.css'

const TrendingSection = () => {
    
    const trendingItem = 8;
    // Function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];  //swap
        }
        return array;
    };

    // Shuffle the food_list and slice it to get a random subset of items
    const randomItems = shuffleArray([...food_list]).slice(0, trendingItem);

  return (
    <div className='recipe-trending'>
            <h2>Popular Recipes</h2>
                <p className="trending-item-creator-2">Check out what's hot in our Popular Recipes! From classic comforts to a lot of creations, 
                    see what's trending on our platform. Join DishDex in enjoying the most delightful dishes!
                </p>
                <div className="trending-item-right">
                    <div className="recipe-display-list">
                        {randomItems.map((item) => (
                            <Link to={`/Recipe/${item._id}`} key={item._id} className="trending-item">

                            <div className="trending-item" key={item._id}>                 
                                <div className="trending-item-image-container">
                                    <img className="trending-item-image" src={item.image} />
                                </div>
                                <a href="" className="trending-item-title">{item.name} (Rank Listed)</a>
                                <p className="trending-item-creator">By {item.creator}</p>                         
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
        </div>  
  )
}
export default TrendingSection
