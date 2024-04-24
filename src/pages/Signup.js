import React, { useState, useEffect } from 'react';
import '../public/css/login.css'
import logo from '../public/images/logo-login.png'

function Signup(){
    const [formData, setFormData] = useState({
        username: '',
        email:'',
        password: ''
      });

    useEffect(() => {
        //fetchData();
      }, []);
      const handleChange = (e) => {
        setFormData({
          
          [e.target.name]: e.target.value
        });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('http://localhost:8080/signup', {
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
            <form className="login-form" method="post" onSubmit={handleSubmit}>
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo-image"/>
                </div>
                <div class="petpicks-login">
                    <pre>𝑷𝒆𝒕</pre><pre className="search-name">𝑷𝒊𝒄𝒌𝒔</pre>
                </div>
                <h1>Sign Up</h1><br/>
                <input name="username" type="text" placeholder="Username" onChange={handleChange} value={formData.username} required/>
                <input name="email" type="text" placeholder="Email" onChange={handleChange} value={formData.email} required/>
                <div className="password-container">
                    <input type="password" name="password" id="passwordInput" class="password" placeholder="Password" required value={formData.password}/>
                        <button className="eye-iconSignup1" id="togglePassword" type="button">
                            <i class="fas fa-eye">
                            </i>
                        </button>    
                    <input type="password" name="password2" id="passwordInput" class="password" placeholder="Repeat Password" required/>
                        <button className="eye-iconSignup2" id="togglePassword" type="button">
                            <i class="fas fa-eye">
                            </i>
                        </button>
                </div>

                <input type="hidden" name="login-redirect" value="login.html"/>
                <button name="submit" type="submit" class="signup-btn">Sign Up</button>
        
                <p className="marg-1">Or</p>
                <div class="alt-option">
                    <button type="button" class="google-btn"><i class="fab fa-google"></i></button>
                    <button type="button" class="apple-btn"><i class="fab fa-apple"></i></button>
                    <button type="button" class="meta-btn"><i class="fab fa-meta"></i></button>
                </div>
                <div>
                    <p className="marg-2">Already have an account? <a id="loginLink" href="login.html" className="col">Login</a></p>
                </div>
            </form>
        </div>
            );
                }

    export default Signup;