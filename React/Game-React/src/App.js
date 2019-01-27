import React, { Component } from 'react';
import styles from './style.css';

class App extends Component {
    constructor(props) {
  super(props);
  this.state = { 
    counter: 0, 
    multiplier: 1
  };
  this.handleClick = this.handleClick.bind(this);
  this.handleUpgrade = this.handleUpgrade.bind(this);
  this.handleCharacter = this.handleCharacter.bind(this);
}
componentDidMount() {
 
}
handleClick(){
  this.setState(prevState=>({counter:prevState.counter + this.state.multiplier}));
}
handleUpgrade(){
  this.setState({multiplier: this.state.multiplier * 2});
  console.log(this.state.multiplier);
}
handleCharacter(){
  console.log("czekamy");
}

  render() {
    return (
     
        <div className="container">
         <p>{this.state.counter}</p>
          <button onClick={this.handleClick}>Add Gold</button>
         <div>
          <ul>
            <li><button onClick={this.handleUpgrade}>Upgrade multiplier * 2</button></li>
            <li><button onClick={this.handleCharacter}>Upgrade multiplier * 2</button></li>
          </ul>
          
         </div>
        </div>
        
   
    );
  }
}

export default App;