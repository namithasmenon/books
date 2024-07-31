import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar style={{backgroundColor: 'rgba(0,0,0,0.6)'}} position="static">
      <Toolbar>
        <Typography style={{marginLeft:'19%',color: 'white'}} align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BOOK STORE
        </Typography>
        <Link to={'/'}><Button  style={{color:'white'}} >Home</Button></Link>
        <Link to={'/add'}><Button  style={{color:'white'}} >User</Button></Link>
        <Link to={'/admin'}><Button style={{color:'white'}}>admin</Button></Link>
      </Toolbar>
    </AppBar>
    
        </Box>
  )
}

export default Start