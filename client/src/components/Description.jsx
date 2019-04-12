import React from 'react';
import { Link } from 'react-router-dom'

const Description = (props) => {
  const { experienceFormData, handleExperienceChange } = props
  return (
    <div className="description-page">
      <textarea maxLength="255" onChange={handleExperienceChange} type="text" name="description"
      value={experienceFormData.description} placeholder="Talk about it"/>
      <Link to="/second-rating"><div className="welcome-button" id="area-button" type="button">next</div></Link>
    </div>
  )
}

export default Description;
