import React from 'react';
import { Link } from 'react-router-dom'
import UserExperienceList from './UserExperienceList'

const UserProfile = (props) => {
  const { experiences, currentUser } = props
  return(
    <div className="user-profile-container">
      <div className="profile-image">
        <img src="https://i.imgur.com/nwRqeIJ.jpg" alt="goat" />
        <h1>{currentUser.username}'s Experiences</h1>
      </div>
        <UserExperienceList experiences={experiences}/>
      <div className="create-link">
        <Link to="select-experience-type"><button type="button">Create an experience</button></Link>
      </div>
    </div>
  )
}

export default UserProfile;
