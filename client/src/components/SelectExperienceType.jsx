import React from 'react';
import { Link } from 'react-router-dom';

const SelectExperienceType = (props) => {
  const { selectType } = props
  return (
    <div className="type-list">
      <div id="select-type-prompt">What are you feeling anxious about?</div>
      <Link to="/init-rating"><div onClick={() => selectType("Social")} className="type">Social
      <img src="https://i.imgur.com/RThaqAW.png" alt="" /></div></Link>
      <Link to="/init-rating"><div onClick={() => selectType("Work")} className="type">Work <img src="https://i.imgur.com/BKpanCl.png" alt="" /></div></Link>
      <Link to="/init-rating"><div onClick={() => selectType("Family")} className="type">Family <img src="https://i.imgur.com/XS9c802.png" alt="" /></div></Link>
      <Link to="/init-rating"><div onClick={() => selectType("Personal")} className="type">Personal <img src="https://i.imgur.com/gjnTfuZ.png" alt="" /></div></Link>
    </div>
  )
}

export default SelectExperienceType;
