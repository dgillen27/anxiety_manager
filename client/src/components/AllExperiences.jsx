import React from 'react';
import { Link } from 'react-router-dom'

const AllExperiences = (props) => {
  const { allExperiences } = props
  return(
    <div className="user-experience-list">
    {allExperiences && allExperiences.map(experience => (
    <div className="user-experience" key={experience.id}>
        <h1>Type: {experience.exp_type}</h1>
        <h2>Description: {experience.description}</h2>
        <h3>Initial Rating: {experience.init_rating}</h3>
        <h3>Second Rating: {experience.second_rating}</h3>
        {experience.final_rating? <h3>Final Rating: {experience.final_rating}</h3>: <h3>Final Rating: Needs to be updated</h3>}
        {experience.final_rating?
          <h3>Average Rating: {((experience.init_rating + experience.second_rating + experience.final_rating) / 3).toFixed(1)}</h3>:
          <h3>Current Average: {((experience.init_rating + experience.second_rating) / 2).toFixed(1)}</h3>
        }
        <h3>CreatedAt: {experience.created_at}</h3>
        <button type="button">Relate</button>
      </div>
    ))}
    </div>
  )
}

export default AllExperiences;
