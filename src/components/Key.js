import React from 'react'
import PropTypes from 'prop-types'

const Key = props => (
  <button onClick={() => props.onClick(props.value)} className='key'>
    {props.value}
  </button>
)

Key.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Key
