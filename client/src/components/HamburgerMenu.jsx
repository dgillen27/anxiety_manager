import React from 'react';

const HamburgerMenu = (props) => {
  const { currentUser, burgerShow } = props
  return (
    <div onClick={burgerShow} className="burger-container">
      <div className="burger"></div>
      <div className="burger" id="burger2"></div>
      <div className="burger" id="burger3"></div>
    </div>
  )
}

export default HamburgerMenu;
