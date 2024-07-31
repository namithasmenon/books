import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link, Typography } from '@mui/material';
import {useLocation } from 'react-router-dom';
import axios from 'axios';

import '../styles.css';
const Add = (user) => {
  const[form,setForm]=useState({
    name:user ? user.name || '':'',
    place:user ? user.place || '':'',
    age:user ? user.age || '':'',
    email:user ? user.email || '':'',
    education:user ? user.education || '':'',
    number:user ? user.number || '':'',
    password:user ? user.number || '':''
});
const location=useLocation()

function valueAdd(){
  axios.post('http://localhost:3000/adduser', form).then((res)=>{
    alert('Data posted')
    window.location.href = '/add';
  }).catch((error)=>{
console.log(error)
  });}
  
  function valueCap(e){
    setForm({...form, [e.target.name]: e.target.value});   
    }
    {/*useEffect(()=>{
      if(location.state!=null){
        setForm({...form,
        moviename:location.state.val.moviename,
        moviedirector:location.state.val.moviedirector,
        moviedescription:location.state.val.moviedescription,
        movieimage:location.state.val.movieimage
        });
      }
      },[location.state])*/}
  return (
    
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
        Sign Up
      </Typography>

        <TextField
          required
          id="outlined-required"
          label="Name"
          name='name'
          value={form.name}
          onChange={valueCap}
          fullWidth
        sx={{ marginBottom: '15px' }}
        />
    
       
        <TextField
          required
          id="outlined-required"
          label="Place"
          name='place'
          value={form.place}
          onChange={valueCap}
          fullWidth
        sx={{ marginBottom: '15px' }}
        />
        
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
          name='age'
          value={form.age}
          onChange={valueCap}
          fullWidth
        sx={{ marginBottom: '15px' }}
        />
        
        <TextField
          required
          id="outlined-required"
          label="EmailID"
          name='email'
          value={form.email}
          onChange={valueCap}
          fullWidth
        sx={{ marginBottom: '15px' }}
          
        />
        
        <TextField
          required
          id="outlined-required"
          label="Education"
          name='education'
          value={form.education}
          onChange={valueCap}
          fullWidth
        sx={{ marginBottom: '15px' }}
        />
        
        <TextField
          id="outlined-number"
          label=" Phone Number"
          type="number"
          name='number'
          value={form.number}
          onChange={valueCap}
          fullWidth
        sx={{ marginBottom: '15px' }}
          
        />
        <TextField
          id="outlined-number"
          label=" Password"
          type="Password"
          name='password'
          value={form.password}
          onChange={valueCap}
          fullWidth
        sx={{ marginBottom: '15px' }}
          
        />
       <Button style={{backgroundColor: 'black',color:'white'}}  onClick={valueAdd}>Sign Up</Button>
       
         </Box>
  
  )
}

export default Add