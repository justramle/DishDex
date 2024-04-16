import React, { useState } from 'react'
import './About.css'

const About = () => {
    // state varibable
    const [category, setCategory] = useState("All");
    return (
        <div className="aboutUsMain">
            <h1>About Us</h1>
            <h2>Who we are</h2>
             <p>
            Inspired by DoorDash and its solution to delivery problems, our team has come up with a unique idea to address the challenges related to recipes. We named it DishDex. Nowadays, many people struggle with maintaining healthy eating habits. It’s challenging to decide what to eat, figure out what ingredients are left in the fridge to cook, or know what to shop for. Sometimes, you might find yourself scrolling through social media to watch and save countless food clips without actually making them. DishDex aims to solve these issues. On our platform, users can share and discover trending recipes, create personalized food lists or recipes, and learn how to cook properly. We want to keep the platform simple and minimalist so that everyone can easily access and use it.
            </p>
        </div>
    )
}

export default About
