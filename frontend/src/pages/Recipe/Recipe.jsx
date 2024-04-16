import React, { useState } from 'react'
import RecipeDetails from '../../components/RecipeDetails/RecipeDetails'
import './Recipe.css'
const Recipe = () => {
    const [category, setCategory] = useState("menu");

    /*
    let input = {};
    input["username"] = "";
    input["email"] = "";
    input["password"] = "";
    input["confirm_password"] = "";
    this.setState({ input: input });
    */

    return (
        <div>
            <RecipeDetails/>
        </div>
    )
}

export default Recipe
