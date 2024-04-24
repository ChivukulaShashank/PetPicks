import React from "react";

import logo from '../public/images/logo-login.png'

function Shop(){
    return (
<div className="login-container">
        <form className="login-form">
            <div className="logo-container"> 
                <img src={logo} alt="logo" className="logo-image"/>
            </div>
            <div class="petpicks-login">
                <pre>𝑷𝒆𝒕</pre><pre className="search-name">𝑷𝒊𝒄𝒌𝒔</pre>
            </div>
            
        </form>
    </div>
    );
}
export default Shop;