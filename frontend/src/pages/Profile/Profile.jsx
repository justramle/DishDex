import React, { useState, useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { menu_list } from '../../assets/assets'
import './Profile.css'


if (localStorage.getItem("interests1") == null || localStorage.getItem("interests1") == '') { localStorage.setItem("interests1", "Food Lover"); }
if (localStorage.getItem("interests2") == null || localStorage.getItem("interests2") == '') { localStorage.setItem("interests2", "Best Teacher");}
if (localStorage.getItem("interests3") == null || localStorage.getItem("interests3") == '') { localStorage.setItem("interests3", "home chef");}




const Profile = () => {

    const { food_list } = useContext(StoreContext);


    const [data, setData] = useState({
        username: localStorage.getItem("username"),
        interests1: localStorage.getItem("interests1"),
        interests2: localStorage.getItem("interests2"),
        interests3: localStorage.getItem("interests3")
    });

    const onChangeHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const editHandler = (event) => {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    };

    const saveHandler = (event) => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    };
    const saveHandler2 = (event) => {
        var modal = document.getElementById("addRecipeModel");
        modal.style.display = "none";
    };


    const addRecipeHandler = (event) => {
        var modal = document.getElementById("addRecipeModel");
        modal.style.display = "block";
    };





    const onSubmit = (e) => {
        localStorage.setItem("username", e.target.username.value);
        localStorage.setItem("interests1", e.target.interests1.value);
        localStorage.setItem("interests2", e.target.interests2.value);
        localStorage.setItem("interests3", e.target.interests3.value);
        e.preventDefault();
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        location.reload();
    };


    const changedispimage = (e) => {
        e.preventDefault();


        
        document.getElementById("dispimage").src = String(e.target.value).replace("C:\\fakepath\\", "/src/assets/");

       
       //  = e.target.value;

    };


    const onSubmitRecipe = (e) => {
        e.preventDefault();

        var nextcount = 0;
        food_list.forEach(function (arrayItem) {
            console.log(arrayItem);
            if (nextcount < eval(arrayItem._id)) {
                nextcount = eval(arrayItem._id);
            }
        });
        nextcount = eval(nextcount) + 1;

        var modal = document.getElementById("addRecipeModel");
        var myrec = JSON.parse( localStorage.getItem("myrecipes") );
        if (myrec == undefined) {
            myrec = new Array();
        }



        var imgloc = String(e.target.image.value).replace("C:\\fakepath\\", "/src/assets/");


        myrec.push({
            _id: String(nextcount),
            custom: true,
            name: e.target.title.value, 
            description: e.target.desc.value,
            image: imgloc,
            category: e.target.category.value,
            time: "15 mins",
            creator: localStorage.getItem("username"),
            rating: 70,
            likes: 117,
            prepTime: 15,
            totalTime: 15,
            serves: 4,
            completeDes: e.target.desc.value,
            ingredients: [
                { title: 'Dressing', items: ['¼ cup extra-virgin olive oil', '3 tablespoons red wine vinegar', '1 garlic clove, minced', '½ teaspoon dried oregano', '¼ teaspoon Dijon mustard', '¼ teaspoon sea salt', 'Freshly ground black pepper'] },
                { title: 'For the salad', items: ['1 English cucumber, cut lengthwise', '1 green bell pepper, chopped', '2 cups halved cherry tomatoes', '5 ounces feta cheese', '⅓ cup thinly sliced red onion', '⅓ cup pitted Kalamata olives', '⅓ cup fresh mint leaves'] },
            ],
            instructions: [
                "Make the dressing: In a small bowl, whisk together the olive oil, vinegar, garlic, oregano, mustard, salt, and several grinds of pepper.",
                "On a large platter, arrange the cucumber, green pepper, cherry tomatoes, feta cheese, red onions, and olives. Drizzle with the dressing and very gently toss. Sprinkle with a few generous pinches of oregano and top with the mint leaves. Season to taste and serve."
            ]













        });
        localStorage.setItem("myrecipes", JSON.stringify(myrec));

        modal.style.display = "none";
        location.reload();
    };

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


    /*
    menu_list.forEach(function (arrayItem) {
        console.log(arrayItem.menu_name);
    });


    var min = 12,
        max = 100,
        select = document.getElementById('category');

    for (var i = min; i <= max; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
    */


  
  return (
    <div className="profile-container">
        
        <div className="profile-card">
        <h2>Profile Card</h2>
          <img src='/bg4.jpeg' alt="User" className="profile-photo" />
              <h3 className="user-name">{localStorage.getItem("username")} </h3>
              <p className="user-info"> {localStorage.getItem("interests1")} | {localStorage.getItem("interests2")} | {localStorage.getItem("interests3")} </p>
              <p className="user-info"><button id="editprofile" className="editbutton" onClick={addRecipeHandler}>Add Recipe</button></p>
              <p className="user-info"><button id="editprofile" className="editbutton" onClick={editHandler}>Edit Profile</button></p>
              <div id="myModal" class="modal">

                  <div class="modal-content">
                      <span class="close" onClick={saveHandler} >&times;</span>
                      <h2>Edit your profile</h2>
                      <form onSubmit={onSubmit}>
                            <div class="formclassflow">
                          <div><label for="username">Name:</label></div><div><input onChange={onChangeHandler} type="text" name="username" id="username" placeholder="User Name"    value={data.username}  /></div> 
                          <div><label for="interests1">Interest:</label></div><div><input onChange={onChangeHandler} type="text" name="interests1" id="interests1" placeholder="Interest" value={data.interests1} /></div>
                          <div><label for="interests2">Interest:</label></div><div><input onChange={onChangeHandler} type="text" name="interests2" id="interests2" placeholder="Interest" value={data.interests2} /></div>
                          <div><label for="interests3">Interest:</label></div><div><input onChange={onChangeHandler} type="text" name="interests3" id="interests3" placeholder="Interest" value={data.interests3} /></div>
                          </div>
                          <div class="formclasslast"><button type="submit" className="signup-button" >Save Changes</button></div>

                        </form>
                  </div>

              </div>
              <div id="addRecipeModel" class="modal">
                  <div class="modal-content-recipe" >
                      <form onSubmit={onSubmitRecipe}>
                          <span class="close" onClick={saveHandler2} >&times;</span>
                          <h2>Add A Recipe</h2>
                          <div className="addrecipe" >
                              <div class="doublewide"><img name="dispimage" id="dispimage" src="/src/assets/blank.png" class="imgholder" /></div>
                              <div class="recipe-leftside labeltag">Image:</div>
                              <div class="recipe-rightside"><input type="file" NAME="image" id="image" onChange={changedispimage} /></div>
                              <div class="recipe-leftside labeltag">Category</div>
                              <div class="recipe-rightside">
                                <select name="category" id="category">
                                  {menu_list.map((item, index) => {
                                      return (                                          
                                          <option>{item.menu_name}</option>                                          
                                      )
                                  })}
                                  </select>

                              </div>
                              <div class="recipe-leftside labeltag">Title:</div>
                              <div class="recipe-rightside"><input name="title" id="" type="text" /></div>
                              <div class="doublewide labeltag">Description</div>
                              <div class="doublewide"><textarea name="desc" id="" rows="5" cols="50" ></textarea></div>
                              <div class="doublewide"><button type="submit" className="signup-button" >Save Changes</button></div>
                          </div>
                      </form>
                  </div>
              </div>

            <div className="user-stats">
                <div className="user-stats-item">
                      <span className="stats-number">+{food_list.length}</span>
                  <span className="stats-label">Recipes</span>
                </div>
                <div className="user-stats-item">
                  <span className="stats-number">+250</span>
                  <span className="stats-label">Reviews</span>
                </div>
            </div>
        </div>
    </div>
     
    
  )
}

export default Profile
