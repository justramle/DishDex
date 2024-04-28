import React, {useState} from 'react'
import './Menu.css'
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu'
import RecipeDisplay from '../../components/RecipeDisplay/RecipeDisplay'


const Menu = () => {
    const [category, setCategory] = useState("All");
    localStorage.setItem("onlymyrecipes", "all")
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
      <CategoryMenu category={category} setCategory={setCategory} Title="All Categories" titleStyle={categoryStyle} />
      
          <RecipeDisplay category={category} setCategory={setCategory} Title="All Recipes" titleStyle={recipeStyle}/>
    </div>
    
  )
}

export default Menu
