import React, { Component } from 'react';

import './style.css';

class Skills extends Component {
    render(){
        return (
            <div id="skills" class="container">
                <div id="title" >
                    <h2> Skills </h2>
                    <hr />
                    <p> I have worked with a number of languages, tools and techniques such as:</p>
                    <div id="iconContainer">
                        <div class="row">
                            <iconify-icon data-icon="logos:html-5" class="col iconStyle"/>
                            <iconify-icon data-icon="logos:css-3" class="col iconStyle"/>
                            <iconify-icon data-icon="logos:javascript" class="col iconStyle"/>
                            <iconify-icon data-icon="logos:react" class="col iconStyle"/>
                        </div>
                        <div class="row">
                            <iconify-icon data-icon="logos:python" class="col iconStyle"/>
                            <iconify-icon data-icon="cib:flask" class="col iconStyle"/>
                            <iconify-icon data-icon="cib:django" class="col iconStyle"/>
                            <iconify-icon data-icon="logos:postgresql" class="col iconStyle"/>
                        </div>
                    </div>
                    <p> More specifically I am experienced using: </p>
                    <p> HTML, CSS, JavaScript, React, Python, Flask, Django, SQL, SQLite, PostgreSQL, MongoDB, Java, C#, .Net, git, docker, TDD, agile. </p>
                    <p> I am also interested in technologies such as machine learning and computer vision and as such I like to play around with datasets and model training </p>
                </div>
            </div>
        );
    };
};

export default Skills;