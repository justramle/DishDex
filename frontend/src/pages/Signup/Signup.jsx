import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'

const Signup = () => {
    // state varibable
    const [category, setCategory] = useState("menu");
    return (
    <center >
        <div className='signup'>
                <div className="signup-contents">
                <div>
                    <h1>REGISTER</h1>
                </div>
                <div>OR</div>
                <div>
                    <h1>
                        <Link to='/Login'>LOGIN</Link>
                    </h1>
                </div>
            </div>
                <div className="signup-form">
                 <SignupForm />
            </div>      
        </div>
    </center>




    )
}

export default Signup