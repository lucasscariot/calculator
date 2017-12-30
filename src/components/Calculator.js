import React, { Component } from 'react';
import { createStore } from 'redux'
import '../stylesheets/App.css';

class Key extends Component {
  render() {
    return (
      <div onClick={() => this.props.onClick()} className="key">{this.props.value}</div>
    );
  }
};


class App extends Component {
  constructor() {
    super();

    this.state = {
      tmp: null,
      input: "",
      sign: null,
    }

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.result = this.result.bind(this);
  };

  handleClick(value) {
    if (parseFloat(value, 10) || value === '.' || value === '0') {
        this.setState({input: this.state.input + value });
    } else {
      const newState = { input: "", sign: value, tmp: parseFloat(this.state.input, 10) || 0 };
      if (!this.state.input.length && this.state.tmp && this.state.sign) {
        newState.tmp = this.state.tmp;
      }
      this.setState(newState);
    }
  }

  reset() {
    this.setState({input: "", sign: null, tmp: null });
  }

  result() {
    let input = parseFloat(this.state.input, 10);
    if (!input && input !== 0) {
      input = this.state.tmp;
    }
    console.log(this.state.tmp + this.state.sign + input);
    if (this.state.sign === '+')
      this.setState({ input: this.state.tmp + input });
    else if (this.state.sign === '-')
      this.setState({ input: this.state.tmp - input });
    else if (this.state.sign === 'x')
      this.setState({ input: this.state.tmp * input });
    else if (this.state.sign === '/')
      this.setState({ input: this.state.tmp / input });
    console.log(this.state);
  }

  render() {
    return (
      <div className="calculator">
        <div className="d-flex">
          <div className="reset" onClick={() => this.reset()}>C</div>
          <div className="screen sign">{this.state.sign}</div>
          <div className="screen input"><p>{this.state.input || this.state.tmp || 0}</p></div>
        </div>

        <div className="keys">
          <div className="d-flex">
            <Key value="7" onClick={() => this.handleClick("7")}/>
            <Key value="8" onClick={() => this.handleClick("8")}/>
            <Key value="9" onClick={() => this.handleClick("9")}/>
            <Key value="-" onClick={() => this.handleClick("-")}/>
          </div>
          <div className="d-flex">
            <Key value="4" onClick={() => this.handleClick("4")}/>
            <Key value="5" onClick={() => this.handleClick("5")}/>
            <Key value="6" onClick={() => this.handleClick("6")}/>
            <Key value="+" onClick={() => this.handleClick("+")}/>
          </div>
          <div className="d-flex">
            <Key value="1" onClick={() => this.handleClick("1")}/>
            <Key value="2" onClick={() => this.handleClick("2")}/>
            <Key value="3" onClick={() => this.handleClick("3")}/>
            <Key value="x" onClick={() => this.handleClick("x")}/>
          </div>
          <div className="d-flex">
            <Key value="0" onClick={() => this.handleClick("0")}/>
            <Key value="." onClick={() => this.handleClick(".")}/>
            <Key value="=" onClick={() => this.result("=")}/>
            <Key value="/" onClick={() => this.handleClick("/")}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
