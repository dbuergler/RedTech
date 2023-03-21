import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle'
import Settings from '@mui/icons-material/Settings';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: 'white'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color: 'black'}}>
            Home
          </Typography>
          <Settings style={{color: 'black'}}/>
          <AccountCircle style={{color: 'black'}}/>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar;