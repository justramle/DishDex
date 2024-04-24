import React, { useState } from 'react'
import './Profile.css'


if (localStorage.getItem("interests1") == null || localStorage.getItem("interests1") == '') { localStorage.setItem("interests1", "Food Lover"); }
if (localStorage.getItem("interests2") == null || localStorage.getItem("interests2") == '') { localStorage.setItem("interests2", "Best Teacher");}
if (localStorage.getItem("interests3") == null || localStorage.getItem("interests3") == '') { localStorage.setItem("interests3", "home chef");}




const Profile = () => {


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




  return (
    <div className="profile-container">
        
        <div className="profile-card">
        <h2>Profile Card</h2>
          <img src='/bg4.jpeg' alt="User" className="profile-photo" />
              <h3 className="user-name">{localStorage.getItem("username")} </h3>
              <p className="user-info"> {localStorage.getItem("interests1")} | {localStorage.getItem("interests2")} | {localStorage.getItem("interests3")} </p>
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
            <div className="user-stats">
                <div className="user-stats-item">
                  <span className="stats-number">+150</span>
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
