import React from "react";
import icon from '../public/images/logo-icon.png'
import { Link } from "react-router-dom";

import '../public/css/style.css'
function Navbar(){
    return (
        <header>
            <div className="top-menu">
                <div className="logo-icon">
                    <Link to="/home"><img src={icon} alt="logo"/></Link>
                </div>
                <div className="petpicks">
                    <pre>𝑷𝒆𝒕</pre><pre styles="color: black;">𝑷𝒊𝒄𝒌𝒔</pre>
                </div>
                <div className="search">
                    <form action="#">
                        <div className="search-container">
                            <input type="text" placeholder="Search" name="search"/>
                            <button className="search-btn">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="navmenuitem">
                    <Link to="/shop">Shop</Link>
                </div>
                <div className="user">
                    <pre id="user-text">𝗨𝘀𝗲𝗿</pre>
                </div>
                
                <div className="dropdown">  
                    <button className="user-icon-btn">
                        <i className="fa-solid fa-user"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link  to="/profile">Profile</Link>
                        <a href="#">Renting</a>
                        <Link  to="/login">Log Out</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Navbar;