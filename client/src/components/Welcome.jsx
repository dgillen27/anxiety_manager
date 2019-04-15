import React from 'react';
import { Link } from 'react-router-dom'

const Welcome = (props) => {
  const { currentUser } = props
  return (
    <div className="welcome-container">
      <h1>Welcome to Anxiety Manager</h1>
      <h3>Get started on your journey to managing your anxiety</h3>
      { currentUser?
      <Link to="/user-profile"><div className="welcome-button">
        <div className="inner-welcome-button">Welcome back!</div></div>
      </Link> :
      <Link to="/login"><div className="welcome-button">
        <div className="inner-welcome-button">Sign In</div></div>
      </Link> }
      <Link to="/register"><div className="welcome-button">Register Now!</div></Link>
    </div>
  )
}

export default Welcome;
