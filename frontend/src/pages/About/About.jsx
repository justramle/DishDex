import React from 'react'
// import WhoAreWe from '../../components/WhoAreWe/WhoAreWe'
import Footer from '../../components/Footer/Footer'
import './About.css'

const About = () => {
 
    return (
       
    <div className="aboutUsMain">
 
    <div className="aboutUsContent">
        <div className="content-img">
            <img src="/logo.jpeg" alt="Our Team" className="img" />
        </div>
        <div className='content-story'>
            <h2>About us</h2>
            <p>
                Our mission is to share flavorful recipes from around the world,
                celebrating all kinds of ingredients from those who love food. We bring them together.
                We are about fun, modern, and balance — not strict rules or focusing on super healthy diets
                because eating food is a way to enjoy life, inspiring and delicious.
            </p>
            <a href="/menu" className="view-more-button">View More</a>
        </div>
    </div>
</div>
    )
}

export default About
