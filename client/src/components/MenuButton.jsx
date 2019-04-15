import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu'

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

function RenderPropsMenu(props) {
  const {currentUser} = props
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };
        const handleLogout = () => {
          props.handleLogout()
          updateAnchorEl(null);
        }

        return (
          <React.Fragment>
            <Button
              aria-owns={open ? 'render-props-menu' : undefined}
              aria-haspopup="true"
              className="the-button"
              id="the-button"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            >
            <HamburgerMenu />
            </Button>
            <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
              { currentUser && <MenuItem onClick={handleClose}><Link to="/user-profile" style={{color: "black"}}>My Profile</Link></MenuItem>}
              { currentUser && <MenuItem onClick={handleClose}><Link to="/select-experience-type" style={{color: "black"}}>Talk About It!</Link></MenuItem>}
              { currentUser && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
              { !currentUser && <MenuItem onClick={handleClose}><Link to="/about" style={{color: "black"}}>About</Link></MenuItem>}
              { !currentUser && <MenuItem onClick={handleClose}><Link to="/contact" style={{color: "black"}}>Contact</Link></MenuItem>}
              { !currentUser && <MenuItem onClick={handleClose}><Link to="/login" style={{color: "black"}}>Login</Link></MenuItem>}
            </Menu>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

export default RenderPropsMenu;
