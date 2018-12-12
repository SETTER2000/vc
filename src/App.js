import React from 'react';
import AppRouter from './components/Router';
import Footer from './components/Footer/Footer';
import logo from './logo.svg';
import './App.css';


const App = ()=>
            <div>
                <div className="App">  <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VC App
                        </a>
                    </header> </div>
                <AppRouter/>
                <Footer/>
            </div>


export default App;
