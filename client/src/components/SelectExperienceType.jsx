import React from 'react';
import { Link } from 'react-router-dom';

const SelectExperienceType = (props) => {
  const { selectType } = props
  return (
    <div className="type-list">
      <div id="prompt">What are you feeling anxious about?</div>
      <Link to="/init-rating"><div onClick={() => selectType("Social")} className="type">Social</div></Link>
      <Link to="/init-rating"><div onClick={() => selectType("Work")} className="type">Work</div></Link>
      <Link to="/init-rating"><div onClick={() => selectType("Family")} className="type">Family</div></Link>
      <Link to="/init-rating"><div onClick={() => selectType("Personal")} className="type">Personal</div></Link>
    </div>
  )
}

export default SelectExperienceType;
