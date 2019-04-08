import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  const { handleLogout, currentUser } = props
  return (
    <div className="header-container">
      { currentUser? <div>{currentUser.username}</div> : <Link to="/login">Login</Link>}
      { localStorage.getItem("authToken") && <button onClick={handleLogout} type="button">Log Out</button> }
    </div>
  )
}

export default Header;
