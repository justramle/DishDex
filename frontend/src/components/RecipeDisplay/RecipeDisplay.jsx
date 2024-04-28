import React, { useContext } from 'react'
import './RecipeDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const RecipeDisplay = ({ category, setCategory, Title = "Trending Meals", titleStyle= {}}) => {
    localStorage.setItem("onlymyrecipes", "all")
    const { food_list } = useContext(StoreContext)


    var svrec = JSON.parse(localStorage.getItem("savedrecipes"));

    if (svrec != null ) {

        food_list.forEach(function (foodItem, foodindex) {

            var pos = svrec.indexOf(foodItem._id);
            if (pos > -1) {
                foodItem.custom = true;
            }


        });
    }



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
    const showmine = (event) => {
        localStorage.setItem("onlymyrecipes", "mine")
        document.getElementById("allr").className = "linkinactive";
        document.getElementById("myr").className = "linkactive";
        document.getElementsByName("storeitem").forEach(function (item) { item.style.display = "none"; });

                
    };
    const showall = (event) => {
        localStorage.setItem("onlymyrecipes", "all")
        document.getElementById("myr").className = "linkinactive";
        document.getElementById("allr").className = "linkactive";
        document.getElementsByName("storeitem").forEach(function (item) { item.style.display = "block"; });

    };

    var showhide = "showlinks";
    var username = localStorage.getItem("username");
    if (username != null) {
        showhide = "showlinks";
    } else {
        showhide = "nolinks";
    }


    return (
     
        <div className='recipe-display' id='recipe-display'>          
            <div class={showhide} >
                <ul style={titleStyle} class="linkul" >
                    <li onClick={showall} className="linkactive" id="allr">All Recipes</li> &nbsp;|&nbsp;
                    <li onClick={showmine} className="linkinactive" id="myr" >My Recipes</li>
                </ul>
            </div>
        <div className="recipe-display-list">

            {food_list.map((item, index) => {
                { console.log(category, item.category); }

                if (category === "All" || category === item.category) {       
                    if (item.custom == undefined) {
                        item.customclass = "storeitem";
                    } else if (item.custom) {
                        item.customclass = "newitem";
                    } else  {
                        item.customclass = "storeitem";
                    }
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} time={item.time} image={item.image} custom={item.customclass}  />
                } 
                
            })}
        </div>
    </div>
  )
}

export default RecipeDisplay
