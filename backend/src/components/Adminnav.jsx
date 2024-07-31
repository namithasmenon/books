import React from 'react'
import { AppBar, Box, Button, IconButton,  Toolbar, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
const Adminnav = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar  style={{backgroundColor: 'rgba(0,0,0,0.6)'}} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography style={{marginLeft:'10%'}} align="centre" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            
            <Button style={{backgroundColor: 'black',color:'white'}}>User Details</Button>
            <Link to={'/adminadd'}><Button style={{backgroundColor: 'black',color:'white'}}>Admin Add</Button></Link>
            <Link to={'/'}><Button style={{backgroundColor: 'black',color:'white'}}>LOGOUT</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
  
      </div>
  )
}

export default Adminnav