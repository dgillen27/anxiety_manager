import React from 'react';
import Graphs from './Graphs'

const PopUp = (props) => {
{/*  const thing = (("message_" + (Math.floor(Math.random() * Math.floor(2)) + 1).toString()).replace(/"/g, ""))
  const thang = eval(thing)*/}
  const now = new Date().getHours();
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  const current = new Date().toLocaleString();
  const { messages, morning_messages, afternoon_messages, night_messages } = props
  const random = (arr) => {
    const num = (Math.floor(Math.random() * Math.floor(arr.length)))
    return num
  }
  return(
    <div className="outer-popup-container" onClick={props.closePopup}>
      <div className="popup-container">
        { now >= 3 && now < 12 && <p>Good morning {props.currentUser.username}!</p>}
        { now >= 3 && now < 12 &&<p>{morning_messages[random(morning_messages)]}</p>}
        { now >= 12 && now <= 21 && <p>Good Afternoon {props.currentUser.username}!</p>}
        { now >= 12 && now <= 21 && <p>{afternoon_messages[random(afternoon_messages)]}</p>}
        { now < 3 && now > 21 && <p>Long day {props.currentUser.username}?</p>}
        { now < 3 && now > 21 && <p>{night_messages[random(night_messages)]}</p>}
      </div>
    </div>
  )
}

export default PopUp;
