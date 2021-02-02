import React, { Component } from 'react';

import './style.css';
import habiTrack from './habiTrack.jpg';
import legitTwitter from './legitTwitter.jpg';
import overReactingQuiz from './overReactingQuiz.jpg';

class Projects extends Component {
    render(){
        return (
            <div id="projects" class="container">
                <div id="title" >
                    <h2> Projects </h2>
                    <hr class="hrStyle"/>
                    <p> Here is a list of a few of the projects I have been working on</p>
                    <div class="card-list">
                        <div class="card" >
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={overReactingQuiz} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h4 class="card-title"> OverReacting Quiz </h4> <hr/>
                                        <p class="card-text"> A version of the popular trivia question game. Whether by yourself or with a couple of friends, pick a category and start playing!</p>
                                        <div class="projectButtons">
                                            <a href="https://overreactingquiz.netlify.app/" target="_blank" class="btn"> Live Demo </a>
                                            <a href="https://github.com/StylianosThomas/OverReacting_Quiz" target="_blank" class="btn"> Source Code </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card" >
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={legitTwitter} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h4 class="card-title">Totally Legit Twitter</h4> <hr/>
                                        <p class="card-text"> A project with the goal of creating a community journaling website. Share your thoughts anonymously with the world or you can just read, react and reply to other posts. </p>
                                        <div class="projectButtons">
                                            <a href="https://totally-legit-twitter.netlify.app/" target="_blank" class="btn"> Live Demo </a>
                                            <a href="https://github.com/StylianosThomas/Totally_Legit_Twitter" target="_blank" class="btn"> Source Code </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card" >
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={habiTrack} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h4 class="card-title">HabiTrack</h4> <hr/>
                                        <p class="card-text"> Do you find it hard to adopt new habits or be consistant on you existing ones? HabitTrack is just for you!</p>
                                        <div class="projectButtons">
                                            <a href="#projects" disabled class="btn"> Under developement </a>
                                            <a href="https://github.com/StylianosThomas/HabiTrack" target="_blank" class="btn"> Source Code </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    };
};

export default Projects;