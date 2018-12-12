import React from 'react'
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
                    <Menu recipes={data} />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
