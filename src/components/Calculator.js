import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import '../stylesheets/App.css'
import Key from './Key'

class App extends Component {
  constructor() {
    super()
    this.state = { monkeyMode: false }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.monkey = this.monkey.bind(this)
  }


  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  monkey() {
    const event = {
      key: _.shuffle(['1', '2', '3', '4', '5', '6', '7', '8', '*', '-', 'Enter', '+', '/', 'Escape'])[0]
    }
    this.handleKeyPress(event)
  }

  handleKeyPress(event) {
    if (parseInt(event.key, 10) || event.key === '0') {
      this.props.actions.updateCompute(event.key)
    } else if (event.key === '*' || event.key === '/' || event.key === '+' || event.key === '-' || event.key === '.') {
      this.props.actions.addOperator(event.key)
    } else if (event.key === 'Backspace') {
      this.props.actions.undoInput(event.key)
    } else if (event.key === ' ') {
      if (this.state.monkeyMode) {
        clearInterval(this.state.monkeyMode);
        this.setState({ monkeyMode: false })
        this.props.actions.clearCompute()
      } else {
        this.setState({ monkeyMode: setInterval(this.monkey, 100) })
      }
    } else if (event.key === 'Escape') {
      this.props.actions.clearCompute()
    } else if (event.key === 'Enter') {
      this.props.actions.getResult()
    }
  }

  render() {
    return (
      <div className='calculator'>
        <div className='d-flex'>
          <div className='key reset' onClick={this.props.actions.clearCompute}>C</div>
          <div className='screen input'>
            <p>{this.props.state.result || this.props.state.currentCompute || 0}</p>
          </div>
        </div>

        <div className='keys'>
          <div className='d-flex'>
            <Key value='7' onClick={this.props.actions.updateCompute} />
            <Key value='8' onClick={this.props.actions.updateCompute} />
            <Key value='9' onClick={this.props.actions.updateCompute} />
            <Key value='-' onClick={this.props.actions.addOperator} />
          </div>
          <div className='d-flex'>
            <Key value='4' onClick={this.props.actions.updateCompute} />
            <Key value='5' onClick={this.props.actions.updateCompute} />
            <Key value='6' onClick={this.props.actions.updateCompute} />
            <Key value='+' onClick={this.props.actions.addOperator} />
          </div>
          <div className='d-flex'>
            <Key value='1' onClick={this.props.actions.updateCompute} />
            <Key value='2' onClick={this.props.actions.updateCompute} />
            <Key value='3' onClick={this.props.actions.updateCompute} />
            <Key value='x' onClick={this.props.actions.addOperator} />
          </div>
          <div className='d-flex'>
            <Key value='0' onClick={this.props.actions.updateCompute} />
            <Key value='.' onClick={this.props.actions.addOperator} />
            <Key value='=' onClick={this.props.actions.getResult} />
            <Key value='/' onClick={this.props.actions.addOperator} />
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
}

export default App