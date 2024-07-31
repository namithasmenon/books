import React, { useState } from 'react'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Link ,useNavigate} from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import '../styles.css';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/users/login', { email, password });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        navigate('/userdash');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      alert('Invalid email or password');
    }
  };
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
     <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        

        <Button variant='contained' style={{color:'white',backgroundColor:'black'}}     fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
          Login
        </Button>
        
        <br />
        <Typography align='center' sx={{ mt: 2 }}>
          <small>Don't have an account yet? <Link to={'/sign'}><Button style={{color:'black'}}>SignUp</Button></Link></small>
        </Typography>
      </Box>
    </div>
  );
};

export default Login