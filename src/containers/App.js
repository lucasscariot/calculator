import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Calculator from '../components/Calculator'
import * as CalcActions from '../actions'

const App = ({ state, actions }) => (
  <div>
    <Calculator actions={actions} state={state} />
  </div>
)

App.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  input: state.input,
  tmp: state.tmp,
  sign: state.sign,
  history: state.history
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CalcActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
