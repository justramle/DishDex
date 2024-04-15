import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';

function App() {
    class RegistrationForm extends React.Component {
        constructor() {
            super();
            this.state = {
                //holds the users values for the form fields
                input: {},
                //holds errors that occur during form submission
                errors: {}
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        //called when the user interacts with any input field
        handleChange(event) {
            let input = this.state.input;
            //identify the input field based on its name attribute
            input[event.target.name] = event.target.value;
            this.setState({ input })
        }
        //called when the form is submitted
        handleSubmit(event) {
            //prevents the default form submission behavior
            event.preventDefault();
            //calls the validate function to check the validity of the form inputs and if it is valid the form is submitted
            if (this.validate()) {
                localStorage.setItem("username",this.state.input.username);
                let input = {};
                input["username"] = "";
                input["email"] = "";
                input["password"] = "";
                input["confirm_password"] = "";
                this.setState({ input: input });
                document.location = "/profile";
            }
        }

        validate() {
            let input = this.state.input;
            let errors = {};
            let isValid = true;

            //checks if the username is null or undefined
            if (!input["username"]) {
                isValid = false;
                errors["username"] = "Please enter your username";
            }

            if (!input["password"]) {
                isValid = false;
                errors["password"] = "Please enter your password"
            }

            this.setState({ errors: errors });

            return isValid;
        }
        render() {
            return (
                <div className='container'>
                    <h1 className='text-center mb-4'>Login Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label for="username" className='form-label fs-5 fw-bold'>USERNAME:</label>
                            <input
                                type="text"
                                name="username"
                                value={this.state.input.username}
                                onChange={this.handleChange}
                                className='form-control fs-5'
                                placeholder='Enter username'
                                id="username"
                            />
                            <div className='text-danger form-text fw-bold fs-5'>{this.state.errors.username}</div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group'>
                                <label for="password" className='form-label fs-5 fw-bold'>PASSWORD:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={this.state.input.password}
                                    onChange={this.handleChange}
                                    className='form-control fs-5'
                                    placeholder='Enter password'
                                    id="password"
                                />
                                <div className='text-danger form-text fw-bold fs-5'>{this.state.errors.password}</div>
                            </div>
                        </div>
                        <div className='form-group'>
                          <Link to='/Signup'>Register</Link>
                        </div>
                            <input
                            type="submit"
                            value="SUBMIT"
                            className='btn btn-success d-flex justify-content-center mx-auto mb-3 px-3'
                        />
                    </form>
                </div>
            )
        }
    }
    return (
        <div className="App">
            <RegistrationForm />
        </div>
    );
}

export default App;