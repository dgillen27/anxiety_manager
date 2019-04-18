import React from 'react';
import { Link } from 'react-router-dom';
import UserExperienceList from './UserExperienceList';
import Line from './Line';
import PieGraph from './PieGraph'
import Graphs from './Graphs';
import PopUp from './PopUp';
import GetStarted from './GetStarted'
import Chart from 'chart.js';

const UserProfile = (props) => {
  const { experiences, currentUser, popup, morning_messages, afternoon_messages, night_messages } = props
  const now = new Date().getHours();
  const random = (arr) => {
    const num = (Math.floor(Math.random() * Math.floor(arr.length)))
    return num
  }
  return(
    <div className="user-profile-container">
      <div className={experiences.length? "inner-user-profile-container" : "other-user-profile-container"}>
        <div className="user-profile" style={!experiences.length === 0? {} : {alignself: "center"}}>
          {/*popup && <PopUp {...props}/>*/}
          <img src={currentUser.profile_img} alt="goat" />
            <div className="greet-user">
              { now >= 0 && now < 12 && <p>Good morning {props.currentUser.username}!</p>}
              { now >= 3 && now < 12 &&<p>{morning_messages[random(morning_messages)]}</p>}
              { now >= 12 && now <= 21 && <p>Good Afternoon {props.currentUser.username}!</p>}
              { now >= 12 && now <= 21 && <p>{afternoon_messages[random(afternoon_messages)]}</p>}
              { now >= 21 && <p>Long day {props.currentUser.username}?</p>}
              { now >= 21 && <p>{night_messages[random(night_messages)]}</p>}
              {experiences.length === 0 && <div>To get started, talk about your problems here &#x2193;</div>}
              {experiences.length === 1 && <div>Great! You've created your first post, come back anytime!</div>}
            </div>
            <div id="profile-center">
              <Link to="/graphs"><div className="header-button" id="profile-button">Check your trends</div></Link>
            </div>
            { currentUser && <Link to="/select-experience-type"><div className="header-button" id="profile-button">Talk About It!</div></Link>}
        </div>
        { experiences.length? <Line {...props}/> : <></>}
        { experiences.length? <PieGraph {...props}/> : <></>}
      </div>
      <UserExperienceList
      {...props}/>
      { experiences.length === 0 && <GetStarted />}
    </div>
  )
}

export default UserProfile;
