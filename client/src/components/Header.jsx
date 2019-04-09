import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  const { handleLogout, currentUser } = props
  return (
    <div className="header-container">
      { currentUser? <div>{currentUser.username}</div> : <div><Link to="/login"><button>Login</button></Link></div>}
      <Link to="/user-profile"><button type="button">Back to My Profile</button></Link>
      <Link to="select-experience-type"><button type="button">Create an experience</button></Link>
      { localStorage.getItem("authToken") && <button onClick={handleLogout} type="button">Log Out</button> }
    </div>
  )
}

export default Header;
