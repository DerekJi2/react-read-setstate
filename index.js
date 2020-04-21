import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  onButtonClick(event) {
    this.setState({
      name: event.target.innerText
    });
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <button onClick={this.onButtonClick}>ERROR</button>
        <button onClick={(e) => this.onButtonClick(e)}>Arrow Function</button>
        <button onClick={this.onButtonClick.bind(this)}>Bind This</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
