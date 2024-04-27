import React from 'react'
import { food_list } from '../../assets/assets'
import { useParams } from 'react-router-dom'
import './Recipe.css'

const Recipe = () => {


    var myrec = JSON.parse(localStorage.getItem("myrecipes"));
    if (myrec != undefined) {
        myrec.forEach(function (arrayItem) {
            var found = false;
            food_list.forEach(function (foodItem, foodindex) {

                if (arrayItem._id == foodItem._id) {
                    found = true;
                }

            });
            if (!found) {
                food_list.push(arrayItem);
            }
        });

    }
    



    const { id } = useParams();
    // Find the recipe with the matching id
    const recipeData = food_list.find(item => item._id === id);
    alert(recipeData.custom);
    if (!recipeData) {
        return <div>Recipe not found</div>;
      }
    return (
        <div className="recipe-container">
            <div className="recipe-header">
                <div class="buttonholder">
                    <button class="roundbutton topbutton" id="signin">Add To Your Recipes</button>
                    <button class="roundbutton bottombutton" id="signin">Delete Recipe</button>
                </div>
                <h2>{recipeData.name}</h2>
            </div>

            <div className="recipe-details">
                <div className="recipe-left">
                    <img className="recipe-image" src={recipeData.image} alt={recipeData.name} />
                    <div className="recipe-metadata">
                        <div className="recipe-rating">
                            <span className="stars">⭐⭐⭐⭐</span>
                            <span className="text">{recipeData.rating} from {recipeData.likes} Likes</span>
                        </div>
                        <div className="recipe-timing">
                            <p>Prep Time: {recipeData.prepTime} mins</p>
                            <p>Total Time: {recipeData.totalTime} mins</p>
                            <p>Serves {recipeData.serves}</p>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="recipe-right">
                        <p className="recipe-description"><strong><i>Description:</i></strong> {recipeData.completeDes}</p>
                        <div className="recipe-ingredients">
                        <h2>Ingredients </h2>
                        {recipeData.ingredients.map((section, index) => (
                            <div key={index}>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                                ))}
                            </ul>
                            </div>
                        ))}
                        </div>
                        <div className="recipe-instructions">
                            <h2>Instructions</h2>
                            {recipeData.instructions.map((step, index) => (
                                <p key={index}>{step}</p>
                            ))}
                        </div>
                </div>
            </div>
           
      </div>
    )
}

export default Recipe
