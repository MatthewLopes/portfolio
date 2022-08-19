import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import selfportrait from './assets/selfportrait.png';
import AboutMe from './AboutMe'
import Skills from './Skills'

function Home() {
    return (
        <div>
            <div class='body'>
                <img src={selfportrait} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <AboutMe />
                <hr />
                <Skills />
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        </div>
    )
}

export default Home;
