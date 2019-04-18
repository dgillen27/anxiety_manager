import React from 'react';
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return(
    <div className="get-started">
      <h2>Hey! It looks like it's your first time here</h2>
      <Link to="/select-experience-type"><div className="welcome-button">
        <div className="inner-welcome-button">Get Started!</div></div>
      </Link>
    </div>
  )
}

export default GetStarted;
