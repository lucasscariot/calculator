import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { createStore } from 'redux'
import Calculator from './components/Calculator'
import calculator from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(calculator)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Calculator
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)
