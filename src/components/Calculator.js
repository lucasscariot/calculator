import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../stylesheets/App.css'
import Key from './Key'

class App extends Component {
  handleClick(value) {
    if (parseFloat(value, 10) || value === '.' || value === '0') {
      this.props.actions.updateInput(value)
    } else {
      this.props.actions.addOperator(value)
    }
  }

  reset() {
    this.props.actions.resetState()
  }

  result() {
    this.props.actions.getResult()
  }

  render() {
    return (
      <div className='calculator'>
        <div className='d-flex'>
          <div className='reset' onClick={() => this.reset()}>C</div>
          <div className='screen sign'>{this.props.state.sign}</div>
          <div className='screen input'>
            <p>{this.props.state.input || this.props.state.tmp || 0}</p>
          </div>
        </div>

        <div className='keys'>
          <div className='d-flex'>
            <Key value='7' onClick={() => this.handleClick('7')} />
            <Key value='8' onClick={() => this.handleClick('8')} />
            <Key value='9' onClick={() => this.handleClick('9')} />
            <Key value='-' onClick={() => this.handleClick('-')} />
          </div>
          <div className='d-flex'>
            <Key value='4' onClick={() => this.handleClick('4')} />
            <Key value='5' onClick={() => this.handleClick('5')} />
            <Key value='6' onClick={() => this.handleClick('6')} />
            <Key value='+' onClick={() => this.handleClick('+')} />
          </div>
          <div className='d-flex'>
            <Key value='1' onClick={() => this.handleClick('1')} />
            <Key value='2' onClick={() => this.handleClick('2')} />
            <Key value='3' onClick={() => this.handleClick('3')} />
            <Key value='x' onClick={() => this.handleClick('x')} />
          </div>
          <div className='d-flex'>
            <Key value='0' onClick={() => this.handleClick('0')} />
            <Key value='.' onClick={() => this.handleClick('.')} />
            <Key value='=' onClick={() => this.result('=')} />
            <Key value='/' onClick={() => this.handleClick('/')} />
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
