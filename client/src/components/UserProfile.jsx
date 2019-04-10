import React from 'react';
import { Link } from 'react-router-dom';
import UserExperienceList from './UserExperienceList';
import Line from './Line';
import PieGraph from './PieGraph'
import Graphs from './Graphs';
import PopUp from './PopUp';
import Chart from 'chart.js';

const UserProfile = (props) => {
  const { experiences, currentUser, popup } = props
  return(
    <div className="user-profile-container">
      <div className="inner-user-profile-container">
        <div className="user-profile">
          {/* popup && <PopUp {...props}/>*/}
          <img src={currentUser.profile_img} alt="goat" />
          <div>{currentUser.username}'s Experiences</div>
          <div>You currently have {experiences.length} posts</div>
        </div>
        {experiences.length && <Line {...props}/>}
        {experiences.length && <PieGraph {...props}/>}
      </div>
      <UserExperienceList
      {...props}/>
      <div className="create-link">
        <Link to="select-experience-type"><button type="button">Create an experience</button></Link>
      </div>
    </div>
  )
}

export default UserProfile;
