import React from 'react'
import { food_list } from '../../assets/assets'
import { useParams } from 'react-router-dom'
import './Recipe.css'

const Recipe = () => {




    var rawrec = localStorage.getItem("myrecipes");
    if (rawrec != null) {
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
    } else {
        var myrec = [];
    }

    const AddtoMyRecipes = (event) => {
        var savedraw = localStorage.getItem("savedrecipes");
        var saved = [];
        var found = false;
        if (savedraw != null) {
            saved = JSON.parse(savedraw);
        } 
        saved.forEach(function (item) {

            if (item == id) {
                found = true;
            }
        });
        if (found == false ) {
            saved.push(id);
        }
        localStorage.setItem("savedrecipes",JSON.stringify(saved));
        location.replace("/menu");

    };
    const RemoveMyRecipes = (event) => {


        var rawsvrec = localStorage.getItem("savedrecipes");
        var svrec = [];
        var sliced = [];


        if (rawsvrec != null) {
            svrec = JSON.parse(rawsvrec);
            var pos = svrec.indexOf(id);
            if (pos > -1) {
                pos += 1;
                sliced = svrec.slice(pos);
                localStorage.setItem("savedrecipes",JSON.stringify(sliced));
            }
        }


        var rawrec = localStorage.getItem("myrecipes");
        if (rawrec.length > 0) {
            var myrec = JSON.parse(localStorage.getItem("myrecipes"));
            var nrec = [];
            if (myrec != undefined) {
                myrec.forEach(function (arrayItem) {
                    if (arrayItem._id != id) {
                        nrec.push(arrayItem);
                    }
                    localStorage.setItem("myrecipes", JSON.stringify(nrec));
                });
            }
        } else {
            var myrec = [];
        }
        location.replace("/menu");
    };

    const { id } = useParams();
    // Find the recipe with the matching id
    const recipeData = food_list.find(item => item._id === id);
    //alert(recipeData.custom);
    if (!recipeData) {
        return <div>Recipe not found</div>;
    }

    var firstbutton = "";
    var secondbutton = "";

    var username = localStorage.getItem("username");
    if (username != null) {
        if (recipeData.custom) {

            firstbutton = "roundbutton hidbutton";
            secondbutton = "roundbutton visbutton";
        } else {
            firstbutton = "roundbutton visbutton";
            secondbutton = "roundbutton hidbutton";

        }
    } else {
        firstbutton = "roundbutton hidbutton";
        secondbutton = "roundbutton hidbutton";
    }

    return (
        <div className="recipe-container">
            <div className="recipe-header">
                
                <center>
                    <h2>{recipeData.name}</h2>
                    <button onClick={AddtoMyRecipes} class={firstbutton} id="addRecipe">Add To Your Recipes</button>
                    <button onClick={RemoveMyRecipes} class={secondbutton} id="delRecipe">Delete Recipe</button>
                </center>
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
