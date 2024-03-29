import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
    return ( 
        <div className="login">
            <div className="container text-center">
                <h5>If you are a valid user on this website you can login</h5>
                <form className="input-form" action="">
                    <h3>Login into Your Account</h3>                    
                    <input id="email" type="text" placeholder="Your Email" />
                    <input id="password" type="password" placeholder="Password" />
                    <input type="submit" value="Login" className='btn' />
                </form>
                <h5>If you new on this website you can <Link to={'/register'}>Create your account</Link></h5>
            </div>
        </div>
     );
}

export default Login;