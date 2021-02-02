import React, { Component } from 'react';

import './style.css';

class About extends Component {
    render(){
        return (
            <div id="about" class="container">
                <div id="title" >
                    <h2> About Me</h2>
                    <hr class="hrStyle"/>
                </div>
                <div class="row">
                    <h4 class="col-md-4"> I love to learn </h4>
                    <p class="col-md-8"> I'm a computer science gradute from the SUNY Empire State College. I am always excited to learn something new and recently I graduated from futureproof where I was trained as a full-stack developer.</p>
                </div>
                <div class="row">
                    <h4 class="col-md-4"> I desire to create </h4>
                    <p class="col-md-8"> I love programming and I aim to use my skills and knowledge to help the healthcare system, environment, education and other sectors in need. </p>
                </div>
                <div class="row">
                    <h4 class="col-md-4"> I aspire to improve </h4>
                    <p class="col-md-8"> I find the feeling of completing a project, developing a new skill, or improving an existing one extremely gratifying and as such I strive for continous improvement </p>
                </div>
            </div>
        );
    };
};

export default About;