import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '@material-ui/lab/Slider';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StepSlider from './StepSlider'

const RatingPage = (props) => {
  const { handleExperienceChange, experienceFormData, handleSlide, updateFinalRating, currentExperience, loading } = props
  return(
    <div className="rating-page">
      <h1>{props.name}</h1>
      <h1>{props.h1}</h1>
      <h2>{props.h2}</h2>
      <StepSlider
      name={props.name}
      value={props.value}
      handleSlide={props.handleSlideType}
      />
      <div className="current-rating">
        <div>{props.value}</div>
      </div>
      <div>
        { (props.name !== "final_rating")?<Link to={props.route}><button type="button">Submit</button></Link>:
        <button onClick={() => updateFinalRating(currentExperience.user_id, currentExperience.id, currentExperience)} type="button">Feck</button>}
      </div>
    </div>
  )
}

export default RatingPage;
