import React from 'react'
import { Box, Button,  TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Admin = () => {
  return (
    <Box
    component="form"
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
         ADMIN LOGIN
      </Typography>
    <div>
        <TextField
          
          id="standard-required"
          label="Username"
          variant="standard"
          fullWidth
        sx={{ marginBottom: '15px' }}
        />
    </div>
    <div>
        <TextField
          
          id="standard-password-input"
          label="Password"
          type="password"
          variant="standard"
          fullWidth
        sx={{ marginBottom: '15px' }}
        />
    </div>
    <Link to={'/ad'}><Button variant='contained' >Login</Button></Link>
    </Box>
  )
}

export default Admin