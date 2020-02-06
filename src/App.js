import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component {
    state = { displayBio: false};

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Matthew. I'm a software engineer.</p>
                <p>I'm creating a portfolio application</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Jacksonville and work at CSX.</p>
                            <p>I enjoy UI development and am learning React.js.</p>
                            <p>Besides coding, I also love soccer and my favorite team is Manchester United.</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;
