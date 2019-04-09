import React from 'react';
import { Link } from 'react-router-dom'

const Description = (props) => {
  const { experienceFormData, handleExperienceChange } = props
  return (
    <div className="description-page">
      <textarea onChange={handleExperienceChange} type="text" name="description"
      value={experienceFormData.description} placeholder="Talk about it"/>
      <Link to="/second-rating"><button type="button">next</button></Link>
    </div>
  )
}

export default Description;
