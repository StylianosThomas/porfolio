import React, { Component } from 'react';

import './style.css';

class Skills extends Component {
    render(){
        return (
            <div id="skills" class="container">
                <div id="title" >
                    <h2> Skills </h2>
                    <hr class="hrStyle"/>
                    <p > I have worked with a number of languages, tools and techniques such as:</p>
                    <div id="iconContainer">
                        <div class="row">
                            <iconify-icon title="HTML" data-icon="logos:html-5" class="col iconStyle"/>
                            <iconify-icon title="CSS" data-icon="logos:css-3" class="col iconStyle"/>
                            <iconify-icon title="JavaScript" data-icon="logos:javascript" class="col iconStyle"/>
                            <iconify-icon title="React" data-icon="logos:react" class="col iconStyle"/>
                        </div>
                        <div class="row">
                            <iconify-icon title="Python" data-icon="logos:python" class="col iconStyle"/>
                            <iconify-icon title="Flask" data-icon="cib:flask" class="col iconStyle"/>
                            <iconify-icon title="Django" data-icon="cib:django" class="col iconStyle"/>
                            <iconify-icon title="PostgreSQL" data-icon="logos:postgresql" class="col iconStyle"/>
                        </div>
                        <div class="row">
                            <iconify-icon title="sqLite" data-icon="vscode-icons:file-type-sqlite" class="col iconStyle"/>
                            <iconify-icon title="Java" data-icon="logos:java" class="col iconStyle"/>
                            <iconify-icon title="C#" data-icon="vscode-icons:file-type-csharp" class="col iconStyle"/>
                            <iconify-icon title="Docker" data-icon="logos:docker-icon" class="col iconStyle"/>
                        </div>
                    </div>
                    <p> I am also interested in technologies such as machine learning and computer vision and as such I like to play around with datasets and model training </p>
                </div>
            </div>
        );
    };
};

export default Skills;