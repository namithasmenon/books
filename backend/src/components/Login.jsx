import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import '../styles.css';
const Login = () => {
  return (
    <div>
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '450px',
        margin: 'auto',
        marginTop: '1%',
        height: 'auto'
      }}
    >
      <Typography variant="h10" style={{color: 'black'}} align="center" gutterBottom>
        LOGIN
      </Typography>

    <TextField
      required
      id="outlined-disabled"
      label="Username/email"
      type='username/email'
      //name='email'
      fullWidth
        sx={{ marginBottom: '15px' }}
    />
    
    <TextField
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      //name='password'
      fullWidth
        sx={{ marginBottom: '15px' }}
    />
  

<Link to={'/view'}><Button variant='contained' >Login</Button></Link>
     <br />
     <small>Don't have an account yet?<Link to={'/sign'}><Button>SignUp</Button></Link></small>
</Box>
</div>
  )
}

export default Login