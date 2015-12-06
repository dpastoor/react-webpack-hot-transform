import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css'
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <div className="App">
       <h1>hello from {this.props.name}</h1>
       </div>
    );
  }
}



