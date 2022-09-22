import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login">

            <form className="form" >
                <h1 className="login-title">Login</h1>
                <div className="input-group">
                    <label for="email">Username</label>
                    <br />
                    <input type="email" name="email" placeholder="Enter your  username" />
                </div>
                <div className="input-group">
                    <label for="password">Password</label>
                    <br />
                    <input type="password" name="password" placeholder="Enter your password" />
                </div>
                <div className="login-btn">
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;