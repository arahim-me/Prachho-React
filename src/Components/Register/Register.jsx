import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import './Register.css'

function Register() {
    return (
        <div className="registration">
            <div className="container text-center">
                <h5>If you new on this website you can Create your account</h5>
                <form className="input-form" action="">
                    <h3>Create Account</h3>
                    <input id="name" type="text" placeholder="Your Name" />
                    <input id="email" type="text" placeholder="Your Email" />
                    <input id="password" type="password" placeholder="Password" />
                    <input id="confirmPass" type="password" placeholder="Confirm Password" />
                    <input type="submit" value="Register" className='btn' />
                </form>
                <h5>Already registered? <Link to={'/login'}>Login</Link> into your account!</h5>
            </div>
        </div>
    );
}

export default Register;