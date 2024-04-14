import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'

const Signup = () => {
    // state varibable
    const [category, setCategory] = useState("menu");
    return (
        <div>
            <SignupForm />
        </div>
    )
}

export default Signup