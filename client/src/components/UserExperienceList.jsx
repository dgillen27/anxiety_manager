import React from 'react';

const UserExperienceList = (props) => {
  const { experiences } = props
  return (
    <div className="user-experience-list">
      {experiences && experiences.map(experience => (
        <div className="user-experience" key={experience.id}>
          <h1>Type: {experience.exp_type}</h1>
          <h2>Description: {experience.description}</h2>
          <h3>Initial Rating: {experience.init_rating}</h3>
          <h3>Second Rating: {experience.second_rating}</h3>
          <h3>Final Rating: {experience.final_rating}</h3>
          <h3>Average Rating: {((experience.init_rating + experience.second_rating + experience.final_rating) / 3).toFixed(1)}</h3>
        </div>
      ))}
    </div>
  )
}

export default UserExperienceList;
