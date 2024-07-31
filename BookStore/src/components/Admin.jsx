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
          
          id="outlined-required"
          label="Username"
          fullWidth
        sx={{ marginBottom: '15px' }}
        />
    </div>
    <div>
        <TextField
          
          id="outlined-required"
          label="Password"
          type="password"
          fullWidth
        sx={{ marginBottom: '15px' }}
        />
    </div>
    <Link to={'/ad'}><Button  style={{color:'white',backgroundColor:'black' }} fullWidth sx={{ mt: 2 }}  >Login</Button></Link>
    </Box>
  )
}

export default Admin