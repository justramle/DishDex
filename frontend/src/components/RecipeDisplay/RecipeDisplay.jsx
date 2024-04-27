import React, { useContext } from 'react'
import './RecipeDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const RecipeDisplay = ({category, Title = "Trending Meals", titleStyle= {}}) => {

    const { food_list } = useContext(StoreContext)
    var myrec = JSON.parse(localStorage.getItem("myrecipes"));
    if (myrec != undefined) {
        myrec.forEach(function (arrayItem) {
            var found = false;
            food_list.forEach(function ( foodItem, foodindex) {

                if (arrayItem._id == foodItem._id) {
                    found = true;
                }
                                
            });
            if (!found) {
                food_list.push(arrayItem);
            }       
       });

    }

    return (
     
        <div className='recipe-display' id='recipe-display'>          
            <h2 style={titleStyle}>{Title="All Recipes"}</h2>
        <div className="recipe-display-list">

            {food_list.map((item, index) => {
                {console.log(category, item.category);}
                if (category === "All" || category === item.category) {       
                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} time={item.time} image={item.image}/>
                } 
                
            })}
        </div>
    </div>
  )
}

export default RecipeDisplay
