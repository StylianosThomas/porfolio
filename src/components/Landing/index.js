import React, { Component } from 'react';
import Particles from 'react-particles-js';

import './style.css';
import profilePic from './profilePic.jpg';
import settings from './particlesjs-config.json'

class Landing extends Component {
    render(){
        return (
            <div id="landing" class="container-fluid">
                <div id="particle" class="container-fluid">
                    <Particles params={settings}/>
                </div>
                <div class="container"> 
                    <div class="jumbotron" id="jumbo">
                        <h1 class="whitney">Stylianos Thomas</h1>
                        <hr/>
                        <h3 class="gotham">Full-stack developer</h3>
                    </div>
                </div>
            </div>
        );
    };
};

export default Landing;