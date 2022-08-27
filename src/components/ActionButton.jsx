import React from 'react';

import './ActionButton.css';

const ActionButton = (props) => {
  return (
    <button type='submit' id='btncolor' className=" btn w-100 py-3">{props.buttonTitle}</button>
  )
}

export default ActionButton