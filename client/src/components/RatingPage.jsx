import React from 'react';
import { Link } from 'react-router-dom'

const RatingPage = (props) => {
  const { handleExperienceChange, experienceFormData } = props
  return(
    <div className="rating-page">
      <h1>{props.name}</h1>
      <h1>{props.h1}</h1>
      <h2>{props.h2}</h2>
      <select onChange={handleExperienceChange} name={props.name} form="create-experience-form" value={props.value}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div>
        <Link to={props.route}><button type="button">Submit</button></Link>
      </div>
    </div>
  )
}

export default RatingPage;
