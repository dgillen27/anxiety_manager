import React from 'react';
import { Link } from 'react-router-dom'

const CreateExperience = (props) => {
  const { handleExperienceChange, experienceFormData, postExperience } = props
  return (
    <div className="experience-form-container">
      <h1>Review your experience before you submit</h1>
      <Link to="init-rating"><h2>Initial Rating: {experienceFormData.init_rating}</h2></Link>
      <Link to="description-page"><h2>Description: {experienceFormData.description}</h2></Link>
      <Link to="second-rating"><h2>Second Rating: {experienceFormData.second_rating}</h2></Link>
      { experienceFormData.init_rating > experienceFormData.second_rating &&  <div>We're happy to hear you are feeling better after talking about it!</div>}
      <div>Please come back and talk about your feelings when your issue is resolved!</div>
      <form onSubmit={postExperience} id="create-experience-form">
        <button type="submit">Submit</button>
      </form>
      <div></div>
    </div>
  )
}

export default CreateExperience;
