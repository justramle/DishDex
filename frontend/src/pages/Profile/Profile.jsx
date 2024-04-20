import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile-container">
        
        <div className="profile-card">
        <h2>Profile Card</h2>
          <img src='/bg4.jpeg' alt="User" className="profile-photo" />
          <h3 className="user-name">Jovian</h3>
          <p className="user-info">Food Lover | Best Teacher | home chef</p>
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
