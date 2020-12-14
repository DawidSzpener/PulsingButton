import React from 'react';

import './PulsingButton.scss'

const PulsingButton = (props) => {
  const classes = ["PulsingButton", "PulsingButton" + props.styles]

  return (
    <div className={classes.join(' ')}>
      {props.text}
    </div>
  )
}

export default PulsingButton
