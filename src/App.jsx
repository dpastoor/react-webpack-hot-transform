import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter.js';
import _ from 'lodash';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          name: "counter 1",
          value: 0
        },
        {
          name: "counter 2",
          value: 0
        }
      ]
    };
  }

  incrementCounter(index) {
    let counters = this.state.counters;
    counters[index].value = counters[index].value + 1;
    this.setState({
      counters: counters
    });
  }

  render() {
    let counters = _.map(this.state.counters, (counter, index) => {
      return(
      <div
        onClick={() => this.incrementCounter(index)}
        >
        <Counter value={counter.value}></Counter>
      </div>
      )
    });

    return (
       <div className="App">
         Total Counter Value: {_.sum(_.map(this.state.counters, "value"))}
         {counters}
       </div>
    );
  }
}
