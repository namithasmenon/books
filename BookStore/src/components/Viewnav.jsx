import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Viewnav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor: 'rgba(0,0,0,0.6)'}} position="static">
        <Toolbar>
          
          <Typography style={{marginLeft:'10%'}}  variant="h6" component="div"  sx={{ flexGrow: 1 }} >
            Explore our Books!
          </Typography>
          <Link to={'/sign'}><Button style={{color:'white'}}> Edit Profile</Button></Link>
          <Link to={'/'}><Button style={{color :'white'}}>LOGOUT</Button></Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Viewnav