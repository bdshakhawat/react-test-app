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
          
        </p>
  <h2 className="" style = {style}>My name is  {man.name +" ." +" "+ 'I am a'+" "+ man.job +" "+ 'of'+" "+ man.institute}</h2>
        <p>My first React Element</p>
        <Person name = "Alomgir" ></Person>
        <Person name= "Raj Razzak" Heroin = "Rojina" ></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle= {
    border:'2px solid red',
    margin:'10px'

  }
  return ( 
    <div className="" style= {personStyle} >;
      <h1>{props.name +" " +" "+ "Heroin"+" "+props.Heroin}</h1>
      <h3>Player of the year</h3>
    </div>
  )
}

export default App;
