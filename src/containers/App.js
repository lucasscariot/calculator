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
  currentCompute: state.currentCompute,
  result: state.result,
  computeHistory: state.computeHistory
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CalcActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
