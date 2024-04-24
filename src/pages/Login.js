import React, { useState, useEffect } from 'react';
import logo from '../public/images/logo-login.png'
import '../public/css/login.css'
import { Link } from "react-router-dom";
function Login(){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });

    useEffect(() => {
        //fetchData();
      }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) {
            throw new Error('Failed to submit data');
        }
        // Handle success, reset form, display success message, etc.
        } catch (error) {
        console.error('Error submitting data:', error);
        // Handle error, display error message, etc.
        }
    };    
    return (
        <div className="login-container">
            <form className="login-form">
                <div className="logo-container"> 
                    <img src={logo} alt="logo" className="logo-image"/>
                </div>
                <div className="petpicks-login">
                    <pre>𝑷𝒆𝒕</pre><pre className="search-name">𝑷𝒊𝒄𝒌𝒔</pre>
                </div>
                <h1>Login</h1><br/>
                <input type="text" placeholder="Username" required name="username"/>
                <div className="password-container">
                    <input type="password" name="password" id="passwordInput" className="password" placeholder="Password" required/>
                    <button className="eye-iconLogin" id="togglePassword" type="button">
                        <i className="fas fa-eye"></i></button> 
                </div>
                <Link to= "/home"><button type="submit" className="login-btn">Login</button></Link>
                <p>Don't have an account? <a href="/SignUp" className="button">Sign Up</a></p>
            </form>
        </div>
    );
}
export default Login;