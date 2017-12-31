import React from 'react'
import PropTypes from 'prop-types'

const Key = props => (
  <div onClick={() => props.onClick(props.value)} className='key'>
    {props.value}
  </div>
)

Key.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Key
