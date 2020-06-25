import React from 'react';
import './App.css';

function Helloworld(props){
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.text}
    </div>
  )
}

function App() {
  return (
    <div>
      Este es mi componente: 
      <Helloworld text="ESCOM" subtitle="IPN"/>
      <Helloworld text="Batiz" subtitle="CECyT"/>
      <Helloworld text="Ains Ooal Gown" subtitle="Overlord"/>
      </div>
  );
}

//State: 


export default App;
