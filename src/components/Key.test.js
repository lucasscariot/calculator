import React from 'react'
import ReactDOM from 'react-dom'
import Key from './Key'

/* global it */

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Key value='' onClick={() => {}} />, div)
})
