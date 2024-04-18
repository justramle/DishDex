import React, { useState } from 'react'
import WhoAreWe from '../../components/WhoAreWe/WhoAreWe'
import Footer from '../../components/Footer/Footer'
import './About.css'

const About = () => {
    // state varibable
    const [category, setCategory] = useState("All");
    return (
        <div className="aboutUsMain">
            <h1>About Us</h1>
            <WhoAreWe />
        </div>
    )
}

export default About
