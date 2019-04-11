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
            <div className="greet-user">
              <div>Welcome back, {currentUser.username}!</div>
              <br/>
              <div>You currently have {experiences.length} posts</div>
            </div>
            <div id="profile-center">
              <Link to="/graphs"><div className="header-button" id="profile-button">Check your trends</div></Link>
            </div>
            { currentUser && <Link to="select-experience-type"><div className="header-button" id="profile-button">Talk About It!</div></Link>}
        </div>
        {experiences.length && <Line {...props}/>}
        {experiences.length && <PieGraph {...props}/>}
      </div>
      <UserExperienceList
      {...props}/>
    </div>
  )
}

export default UserProfile;
