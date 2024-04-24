import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Login.css'

const Login = () => {
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
        if (data.name && data.password) {
            localStorage.setItem("username", data.name );
            navigate('/profile');    
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
                <h2>Log In</h2>
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
                        type="password" 
                        name="password" 
                        onChange={onChangeHandler} 
                        value={data.password} 
                        placeholder="Password" 
                        required 
                    />
                    <button type="submit" className="signup-button" >Log In</button>
                </form>
                <p>Don't Have An Account? <Link to="/signup" className="signup-switch">Join Now</Link></p>
            </div>
        </div>
    )
}

export default Login
