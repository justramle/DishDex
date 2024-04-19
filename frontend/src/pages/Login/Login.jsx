import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.css'

const Login = () => {
    // state varibable
    return (
    <center >
        <div className='login'>
            <div className="login-contents">
                <div>
                    <h1>LOGIN</h1>
                </div>
                <div>OR</div>
                <div>
                    <h1><Link to='/Signup'>REGISTER</Link></h1>
                </div>
            </div>
                <div className="login-form">
                <LoginForm />
            </div>      
        </div>
    </center>
    )
}

export default Login
