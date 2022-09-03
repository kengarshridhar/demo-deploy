import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';

function userName(usrname) {
  return usrname.firstName + ' ' + usrname.lastName;
}

const usrname = {
  firstName: "Ajeet",
  lastName:" Kengar"
};


function lol(){
  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );
  return element;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header ></Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{lol()}</p>
        <h1> Hello, {userName(usrname)} ...! </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
