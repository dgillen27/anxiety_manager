import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const OpenMenu = (props) => {
  const { currentUser, handleLogout } = props
  return(
    <div className="open-menu-content">
      { !currentUser && <Link to="/about"><div className="open-button">About</div></Link> }
      { !currentUser && <Link to="/contact"><div className="open-button">Contact</div></Link> }
      { currentUser && <Link to="/user-profile"><div className="open-button">Back to My Profile</div></Link>}
      { currentUser && <Link to="select-experience-type"><div className="open-button">Create an experience</div></Link>}
      <Link to="/all-experiences"><div className="open-button" type="button">Check out everyone</div></Link>
      { localStorage.getItem("authToken") && <div className="open-button" id="hoverable" onClick={handleLogout}>Log Out</div> }
    </div>
  )
}

export default OpenMenu;
