import React, { useState } from 'react';

function AboutMe() {
    const [displayBio, setDisplayBio] = useState(false);

    return (
        <div>
            <p>My name is Matthew Lopes. I'm a software engineer at Availity in Jacksonville, FL.</p>
            <p>I am going to school for my masters in Data Science and my expected graduation is April 2023.</p>
            {
                displayBio ? (
                    <div>
                        <p>Besides coding, I also love most sports and my favorite teams are Patriots, Celtics, and Manchester United.</p>
                        <button onClick={() => setDisplayBio(false)}>Show less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={() => setDisplayBio(true)}>Read more</button>
                    </div>
                )
            }
        </div>
    )
}

export default AboutMe;
