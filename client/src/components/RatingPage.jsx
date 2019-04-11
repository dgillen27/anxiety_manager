import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '@material-ui/lab/Slider';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StepSlider from './StepSlider'

const RatingPage = (props) => {
  const { handleExperienceChange, experienceFormData, handleSlide, updateFinalRating, currentExperience, loading } = props
  const nine_ten = {
    color: '#F84308',
  }
  const seven_eight = {
    color: "#F59200"
  }

  const five_six = {
    color: "#F4E103"
  }
  const three_four = {
    color: '#6BF149'
  }
  const one_two = {
    color: "#2EDE0A"
  }
  return(
    <div className="rating-page">
      { (props.name === "init_rating" && experienceFormData.exp_type === "Social" || experienceFormData.exp_type === "Personal") && <div className="init-prompt">So you're feeling anxious about something {experienceFormData.exp_type.toLowerCase()}?</div>}
      { (props.name === "init_rating" && experienceFormData.exp_type === "Work" || experienceFormData.exp_type === "Family") && <div className="init-prompt">So you're feeling anxious about something {experienceFormData.exp_type.toLowerCase()} related?</div>}
      <br/>
      <div>{props.h1}</div>
      <br/>
      <div>{props.h2}</div>
      <StepSlider
      name={props.name}
      value={props.value}
      handleSlide={props.handleSlideType}
      />
      <div className="current-rating">
        { props.value >= 1 && props.value < 3 && <div style={one_two}>{props.value}</div>}
        { props.value >= 3 && props.value < 5 && <div style={three_four}>{props.value}</div>}
        { props.value >= 5 && props.value < 7 && <div style={five_six}>{props.value}</div>}
        { props.value >= 7 && props.value < 9 && <div style={seven_eight}>{props.value}</div>}
        { props.value >= 9 && <div style={nine_ten}>{props.value}</div>}
      </div>
      <div>
        { (props.name !== "final_rating")?<Link to={props.route}><button type="button">Submit</button></Link>:
        <button onClick={() => updateFinalRating(currentExperience.user_id, currentExperience.id, currentExperience)} type="button">Update</button>}
      </div>
    </div>
  )
}

export default RatingPage;
