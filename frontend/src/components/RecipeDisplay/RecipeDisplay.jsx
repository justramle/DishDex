import React, { useContext } from 'react'
import './RecipeDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const RecipeDisplay = ({category, Title = "Trending Meals", titleStyle= {}}) => {

    const { food_list } = useContext(StoreContext)


    if (category == "All") 
        Title = "All Recipes";
    else 
        Title = category;


    return (
     
        <div className='recipe-display' id='recipe-display'>
           
            <h2 style={titleStyle}>{Title}</h2>
        <div className="recipe-display-list">

            {food_list.map((item, index) => {
                {console.log(category, item.category);}
              // if category on all then display all else show only food match category
                if (category === "All" || category === item.category) {
                  
                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} time={item.time} image={item.image}/>
                } 
                
            })}
        </div>
    </div>
  )
}

export default RecipeDisplay
