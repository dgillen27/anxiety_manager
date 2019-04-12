import React from 'react';
import { Link } from 'react-router-dom'

const UserExperienceList = (props) => {
  const { experiences, showExperience, destroyExperience } = props
  return (
    <div className="user-experience-list">
      {experiences && experiences.map(experience => (
      <div className="user-experience" key={experience.id}>
        <div>Type: {experience.exp_type}</div>
        <div>Description: {experience.description}</div>
        <div>Initial Rating: {experience.init_rating}</div>
        <div>Second Rating: {experience.second_rating}</div>
        {experience.final_rating? <div>Final Rating: {experience.final_rating}</div>:
        <div id="update" onClick={() => props.showExperience(experience.user_id, experience.id)}>Final Rating: Needs to be updated</div>}
        {experience.final_rating?
        <div>Average Rating: {((experience.init_rating + experience.second_rating + experience.final_rating) / 3).toFixed(1)}</div>:
        <div>Current Average: {((experience.init_rating + experience.second_rating) / 2).toFixed(1)}</div>
        }
        <div className="welcome-button" id="delete-button" onClick={() => destroyExperience(experience.user_id, experience.id)} type="button">Delete</div>
      </div>
      ))}
    </div>
  )
}

export default UserExperienceList;
