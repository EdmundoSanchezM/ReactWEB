import React from 'react';
import './App.css';

// function Helloworld(props) {
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.text}
//     </div>
//   )
// }

class Helloworld extends React.Component {
  state = {
    show: true
  }
  cambiartestado = () =>{
    this.setState({show: !this.state.show})
  }
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.text}
          <button onClick={this.cambiartestado}>Cambiar estado</button>
        </div>
      )
    } else {
      return <h1>
        No hay elementos
        <button onClick={this.cambiartestado}>Cambiar estado</button>
        </h1>
    }

  }
}

function App() {
  return (
    <div>
      Este es mi componente:
      <Helloworld text="ESCOM" subtitle="IPN" />
      <Helloworld text="Batiz" subtitle="CECyT" />
      <Helloworld text="Ains Ooal Gown" subtitle="Overlord" />
    </div>
  );
}

//State: 


export default App;
