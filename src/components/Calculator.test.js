import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './Calculator'

/* global it */

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator state={{}} actions={{}} />, div)
})
