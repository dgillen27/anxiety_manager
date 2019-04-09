import React from 'react';
import { Link } from 'react-router-dom'
import UserExperienceList from './UserExperienceList'

const UserProfile = (props) => {
  const { experiences, currentUser } = props
  return(
    <div className="user-profile-container">
      <div className="profile-image">
        <img src={currentUser.profile_img} alt="goat" />
        <h1>{currentUser.username}'s Experiences</h1>
      </div>
        <UserExperienceList
        experiences={experiences}
        showExperience={props.showExperience}
        destroyExperience={props.destroyExperience}/>
      <div className="create-link">
        <Link to="select-experience-type"><button type="button">Create an experience</button></Link>
        <Link to="/all-experiences"><button type="button">Check out everyone</button></Link>
      </div>
    </div>
  )
}

export default UserProfile;
