import React, { useContext } from 'react'
import './RecipeDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const RecipeDisplay = ({category}) => {

    const { food_list } = useContext(StoreContext)
  return (
    <div className='recipe-display' id='recipe-display'>
        <h2> Trending Meals</h2>
        <div className="recipe-display-list">

            {food_list.map((item, index) => {
                {console.log(category, item.category);}
              //if category on all then display all else show only food match category
                if(category==="All" || category===item.category){
                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                } 
            })}
        </div>
    </div>
  )
}

export default RecipeDisplay
