import React from "react";

import '../public/css/profilestyle.css'

import profile from '../public/images/logo.png'

function Profile(){
    return (
            <main>
                <div className="profile-container">
                    <div class="user-info">
                        <img src={profile} alt="logo"/>
                        <h2>UserName: <span id="joined-date"></span></h2>
                        <h2>Email: <span id="email"></span></h2>
                     </div>
                </div>
            </main>
        );
    }
export default Profile;