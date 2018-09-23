import React, { Component } from 'react';


class Character extends Component {
    render() {
      return (
        <div className="characterContainer">
        
            <h1 className="App-title">{ this.props.name }</h1>
            <p>{this.props.image}</p>
         
        </div>
        
      );
    }
  }
  
  export default Character;
  