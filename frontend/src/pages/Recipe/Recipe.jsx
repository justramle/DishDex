import React from 'react'
import { food_list } from '../../assets/assets'
import './Recipe.css'
const Recipe = () => {

const recipeImage = food_list[0].image;

// Dummy data for the Greek Salad
const recipeData = {
    title: "Greek Salad",
    rating: 70,
    likes: 117,
    prepTime: 15,
    totalTime: 15,
    serves: 4,
    description: "This easy Greek salad recipe is our new favorite summer side dish! If you make it ahead for a gathering, save a few mint leaves to add right before serving.",
    image: recipeImage, 
    ingredients: [
      { title: 'Dressing', items: ['¼ cup extra-virgin olive oil', '3 tablespoons red wine vinegar', '1 garlic clove, minced', '½ teaspoon dried oregano', '¼ teaspoon Dijon mustard', '¼ teaspoon sea salt', 'Freshly ground black pepper'] },
      { title: 'For the salad', items: ['1 English cucumber, cut lengthwise', '1 green bell pepper, chopped', '2 cups halved cherry tomatoes', '5 ounces feta cheese', '⅓ cup thinly sliced red onion', '⅓ cup pitted Kalamata olives', '⅓ cup fresh mint leaves'] },
    ],
    instructions: [
      "Make the dressing: In a small bowl, whisk together the olive oil, vinegar, garlic, oregano, mustard, salt, and several grinds of pepper.",
      "On a large platter, arrange the cucumber, green pepper, cherry tomatoes, feta cheese, red onions, and olives. Drizzle with the dressing and very gently toss. Sprinkle with a few generous pinches of oregano and top with the mint leaves. Season to taste and serve."
    ],
  };


    return (
        <div className="recipe-container">

            <div className="recipe-header">
            <h2>{recipeData.title}</h2>
            </div>

            <div className="recipe-details">
                <div className="recipe-left">
                    <img className="recipe-image" src={recipeData.image} alt={recipeData.title} />
                    <div className="recipe-metadata">
                        <div className="recipe-rating">
                            <span className="stars">⭐⭐⭐⭐</span>
                            <span className="text">{recipeData.rating} from {recipeData.likes} votes</span>
                        </div>
                        <div className="recipe-timing">
                            <p>Prep Time: {recipeData.prepTime} mins</p>
                            <p>Total Time: {recipeData.totalTime} mins</p>
                            <p>Serves {recipeData.serves}</p>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="recipe-right">
                        <p className="recipe-description"><strong><i>Description:</i></strong> {recipeData.description}</p>
                        <div className="recipe-ingredients">
                        <h2>Ingredients </h2>
                        {recipeData.ingredients.map((section, index) => (
                            <div key={index}>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.items.map((item, index) => (
                                <li key={index}>{item}</li>
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
