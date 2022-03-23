import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

const LoginDashBoard = ({ open,handleClick,handleClose,anchorEl}) => {
    const { logOut } = useAuth();
    const history = useHistory();
    const location = useLocation();
    return (
    <div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'account-menu',
        }}
          PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-40%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem  onClick={() => history.push("/account")}>My account</MenuItem>
        <MenuItem onClick={ logOut}>Logout</MenuItem>
        <MenuItem onClick={() => history.push("/home")}>Home</MenuItem>
      </Menu>
    </div>
    );
};

export default LoginDashBoard;