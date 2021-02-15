import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

export default class App extends Component {
  constructor(props)
    {
      super(props);
      this.state = {value: ''};
      this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }
    
    addValue(evt)
    {
      evt.preventDefault();
      if(this.state.value !=undefined)
      {
        alert('Your input value is: ' + this.state.value)
      }
    }
    updateInput(evt){
      this.state={value: evt.target.value};   
  }

  render()
    {
      return (
      <form onSubmit={this.addValue}>
      <input type="text" onChange={this.updateInput} /><br/><br/>
      <input type="submit" value="Click Me :)"/>
      </form>
      )
    }
}

