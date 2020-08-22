import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var man = {
        name: 'sumon',
       job : 'Teacher',
       institute : 'MCPSC'
  }
  var style = {
    color : 'red',
    backgroundColor:'cyan'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
  <h2 className="" style = {style}>My name is  {man.name +" ." +" "+ 'I am a'+" "+ man.job +" "+ 'of'+" "+ man.institute}</h2>
        <p>My first paragraph</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  return <h1>Sakib Al HasAN</h1>
}

export default App;
