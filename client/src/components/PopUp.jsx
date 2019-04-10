import React from 'react';
import Graphs from './Graphs'

const PopUp = (props) => {
  return(
    <div className="popup-container">
      <div id="x" onClick={props.closePopup}>X</div>
      <Graphs {...props}/>
    </div>
  )
}

export default PopUp;
