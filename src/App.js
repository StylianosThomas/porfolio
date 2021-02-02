import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, Navbar } from './layout';
import { Landing, About, Skills, Projects, Contact } from './components';

class App extends Component {
    render() {
        return (
            <div id="App">
                <Navbar/>
                <main>
                    <Switch>
                        <Route exact path='/' component={ Landing }/>
                        <Route path='/about'>
                            <About/>
                            <Skills/>
                            <Contact/>
                            <Footer/>
                        </Route>
                        <Route path='/projects'>
                            <Projects/>
                            <Footer/>
                        </Route>
                    </Switch>
                </main>
            </div>
        );
    };
};

export default App;