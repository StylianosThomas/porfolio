import React, { Component } from 'react';
import { Header, Footer, Navbar } from './layout';
import { Landing, About, Skills, Projects, Contact } from './components';

class App extends Component {
    render() {
        return (
            <>
                {/* <Navbar/> */}
                <main>
                    {/* <Header/> */}
                    <Landing/>
                    <About/>
                    <Skills/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
                </main>
            </>
        );
    };
};

export default App;