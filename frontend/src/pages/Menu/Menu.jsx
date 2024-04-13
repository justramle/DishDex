import React, {useState} from 'react'
import './Menu.css'
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu'
import RecipeDisplay from '../../components/RecipeDisplay/RecipeDisplay'
import FoodItem from '../../components/FoodItem/FoodItem'
import { food_list } from '../../assets/assets';

const Menu = () => {
    const [category, setCategory] = useState("All");
    
    const categoryStyle = {
        fontSize: '34px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px'
    };
    const recipeStyle = {
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        fontWeight: '500', 
        alignItems: 'center',
    };

  return (
    <div>
     <CategoryMenu category={category} setCategory={setCategory} Title="The Latest Category" titleStyle={categoryStyle} />
      
      <RecipeDisplay category={category} Title="All Recipes" titleStyle={recipeStyle}/>
      <div className="recipe-container">
        {food_list.map(food => (
          <FoodItem
            name={food.name}
            time={food.time}
            description={food.description}
            image={food.image}
          />
        ))}
      </div>

    </div>
    
  )
}

export default Menu
