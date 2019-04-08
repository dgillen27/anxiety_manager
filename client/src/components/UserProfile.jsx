import React from 'react';
import { Link } from 'react-router-dom'
import UserExperienceList from './UserExperienceList'

const UserProfile = (props) => {
  const { experiences, currentUser } = props
  return(
    <div className="user-profile-container">
      <div className="profile-image">
        <img src="https://i.imgur.com/nwRqeIJ.jpg" alt="goat" />
      </div>
      <div className="user-experience-list">
        <h1>{currentUser.username}'s Experiences</h1>
        <UserExperienceList experiences={experiences}/>
      </div>
      <div className="create-link">
        <Link to="create-experience"><button type="button">Create an experience</button></Link>
      </div>
    </div>
  )
}

export default UserProfile;
