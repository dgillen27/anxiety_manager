import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';


const Header = (props) => {
  const { handleLogout, currentUser } = props
  return (
    <div className="header-container">
      <div id="logo-container"><div><Logo/></div><div id="logo-name">Anxiety Manager</div></div>
      <div className="header-content">
        { !currentUser && <Link to="/about"><div className="header-button">About</div></Link> }
        { !currentUser && <Link to="/contact"><div className="header-button">Contact</div></Link> }
        { currentUser? <Link to="/user-profile"><div className="header-button">{currentUser.username}</div></Link> :
        <div><Link to="/login"><div className="header-button">Login</div></Link></div>}
        { currentUser && <Link to="select-experience-type"><div className="header-button">Talk About It!</div></Link>}
        <Link to="/all-experiences"><div className="header-button" type="button">Check Out Everyone</div></Link>
        { localStorage.getItem("authToken") && <div className="header-button" id="hoverable" onClick={handleLogout}>Log Out</div> }
      </div>
      <HamburgerMenu {...props}/>
    </div>
  )
}

export default Header;
