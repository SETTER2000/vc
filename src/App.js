import React, { Component } from 'react';
import AppRouter from './components/Router';
import Footer from './components/Footer/Footer';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        </header>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <AppRouter  />
                </div>
            </div>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
