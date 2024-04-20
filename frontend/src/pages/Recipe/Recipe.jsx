import React from 'react'
import { food_list } from '../../assets/assets'
import { useParams } from 'react-router-dom'
import './Recipe.css'

const Recipe = () => {

    const { id } = useParams();
    // Find the recipe with the matching id
    const recipeData = food_list.find(item => item._id === id);
    if (!recipeData) {
        return <div>Recipe not found</div>;
      }
    return (
        <div className="recipe-container">

            <div className="recipe-header">
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
