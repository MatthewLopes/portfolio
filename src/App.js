import React, { Component } from 'react';
import { Routes , 
    Route, Link} from "react-router-dom";
import Home from './Home.js';
import Resume from './Resume';

function App() {
    return (
        <>
        <div class='nav-bar'>
            <div class='nav-bar-buttons'>
                <Link to="/" className='nav-bar-button'>Home</Link>
                <Link to="/resume" className='nav-bar-button'>Resume</Link>
            </div>
        </div>
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
        </Routes >
        </ >
    );
}

export default App;
