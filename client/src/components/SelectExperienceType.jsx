import React from 'react';
import { Link } from 'react-router-dom';

const SelectExperienceType = (props) => {
  const { selectType } = props
  return (
    <div className="type-list">
      <div id="prompt">What are you feeling anxious about?</div>
      <Link to="/init-rating"><div onClick={() => selectType("social")} className="type">Social</div></Link>
      <Link to="/init-rating"><div onClick={() => selectType("work")} className="type">Work</div></Link>
      <Link to="/init-rating"><div onClick={() => selectType("family")} className="type">Family</div></Link>
      <Link to="/init-rating"><div onClick={() => selectType("personal")} className="type">Personal</div></Link>
    </div>
  )
}

export default SelectExperienceType;
