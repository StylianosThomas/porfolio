import React, { Component } from 'react';

import './style.css';

class Contact extends Component {
    render(){
        return (
            <div id="contact" class="container">
                <div id="title" >
                    <h2> Contact </h2>
                    <hr class="hrStyle"/>
                    <p> You can find more about me here: </p>
                    <div class="row">
                        <a href="https://www.linkedin.com/in/stylianos-thomas/" target="_blank" class="btn col">
                            <iconify-icon title="LinkedIn" data-icon="ant-design:linkedin-filled" class="iconStyle"/>
                        </a>
                        <a href="https://github.com/StylianosThomas" target="_blank" class="btn col">
                            <iconify-icon title="GitHub" data-icon="ant-design:github-filled" class="iconStyle"/>
                        </a>
                        <a href="#contact" class="btn col">
                            <iconify-icon title="Email" data-icon="clarity:email-solid" class="iconStyle"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Contact;