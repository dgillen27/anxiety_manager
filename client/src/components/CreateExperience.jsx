import React from 'react';
import { Link } from 'react-router-dom'

const CreateExperience = (props) => {
  const { handleExperienceChange, experienceFormData, postExperience } = props
  return (
    <div className="experience-form-container">
      <h1>hello</h1>
      <form onSubmit={postExperience}>
        <input onChange={handleExperienceChange} type="text" name="exp_type" value={experienceFormData.exp_type} placeholder="exp_type" />
        <textarea onChange={handleExperienceChange} type="text" name="description" value={experienceFormData.description} placeholder="Talk about it"/>
        <input onChange={handleExperienceChange} type="text" name="init_rating" value={experienceFormData.init_rating} placeholder="init_rating" />
        <input onChange={handleExperienceChange} type="text" name="second_rating" value={experienceFormData.second_rating} placeholder="second_rating" />
        <input onChange={handleExperienceChange} type="text" name="final_rating" value={experienceFormData.final_rating} placeholder="final_rating" />
        <button type="submit">Submit</button>
      </form>
      <Link to="/user-profile"><button type="button">Back to My Profile</button></Link>
    </div>
  )
}

export default CreateExperience;
