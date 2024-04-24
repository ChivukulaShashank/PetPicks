//dependencies
import React, { Component } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import './App.css';

import './public/css/login.css';

import Home from './pages/Home';
import Navbar from './pages/navbar';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
        <Navbar/>
        <Routes>       
            <Route path ="/" element={<Login/>}/>
            <Route path ="/signup" element={<Signup/>}/>
            <Route path ="/profile" element={<Profile/>}/>
            <Route path ="/home" element={<Home/>}/>
            <Route path ="/shop" element={<Shop/>}/>    
        </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
