import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        if (data.name && data.email && data.password) {
            navigate('/login');    
        } else {
            console.error('Please fill in all fields.');
        }
     
    };

    return (
        <div className='signup-container'>
            <div className="signup-image-section">
                <img src="/signupimg.jpeg" alt="" className="headerImage" />
            </div>
            <div className="signup-form-section">
               
                <h3>Sign Up to create your favorite recipes</h3>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={onChangeHandler} 
                        value={data.name} 
                        placeholder="User Name" 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        onChange={onChangeHandler} 
                        value={data.email} 
                        placeholder="Email" 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        onChange={onChangeHandler} 
                        value={data.password} 
                        placeholder="Password" 
                        required 
                    />
                    <button type="submit" className="signup-button" >Create Account</button>
                </form>
                <p>Have an account? <Link to="/login" className="signup-switch">Log In</Link></p>
            </div>
        </div>
    )
}

export default Signup