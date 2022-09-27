import React, { useState, useEffect } from 'react';
import './Login.css';
import { getAuth } from "firebase/auth";
import app from './../../firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const signUp = () => {
        createUserWithEmailAndPassword(email, password);
        alert('Successfully create an account');
    }
    useEffect(() => {
        if (user) {
            console.log(user)
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);
    if (error) {
        return <p>{error.message}</p>;
    }


    const signIn = () => {
        signInWithEmailAndPassword(email, password);

    }
    return (
        <div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Email </label>
                        <input type="text" name="email" placeholder="Enter your email" required onBlur={(e) => setEmail(e.target.value)} size="40" />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="password" placeholder='Enter your password' required onBlur={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="button-container">
                        <input onClick={signIn} type="submit" value="Login" />
                        <input onClick={signUp} type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;