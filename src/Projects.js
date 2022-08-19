import React, { Component } from 'react';
import PROJECTS from './data/projects';

function Projects() {
    return (
        <div>
            <h2>Highlighted Projects</h2>
            <div>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                            <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
                            <h3>{PROJECT.title}</h3>
                            <img src={PROJECT.image} alt='profile' style={{ width: 200, height: 120 }}/>
                            <p>{PROJECT.description}</p>
                            <a href={PROJECT.link}>{PROJECT.title}</a>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Projects;