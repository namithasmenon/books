import React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link, Typography } from '@mui/material';
import {useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';
import Adminnav from './Adminnav';
const Adminadd = (book) => {
        const[form,setForm]=useState({
          imgsrc:book ? book.imgsrc || '':'',
          title:book ? book.place || '':'',
          author:book ? book.author|| '':'',
          rating:book ? book.email || '':'',
      });
      const location=useLocation()
      
      function valueAdd(){
        axios.post('http://localhost:3000/addbook', form).then((res)=>{
          alert('Data posted')
          window.location.href='/adminadd';
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
        ADD BOOK
      </Typography>

        <TextField
          required
          id="outlined-required"
          label="Image"
          name='imgsrc'
          value={form.imgsrc}
          onChange={valueCap}
          fullWidth
        sx={{ marginBottom: '15px' }}
        />
    
       
        <TextField
          required
          id="outlined-required"
          label="Title"
          name='title'
          value={form.title}
          onChange={valueCap}
          fullWidth
        sx={{ marginBottom: '15px' }}
        />
        
        
        
        <TextField
          required
          id="outlined-required"
          label="Author"
          name='author'
          value={form.author}
          onChange={valueCap}
          fullWidth
        sx={{ marginBottom: '15px' }}
          
        />
        <TextField
          id="outlined-number"
          label="Rating"
          type="number"
          name='rating'
          value={form.rating}
          onChange={valueCap}
          fullWidth
        sx={{ marginBottom: '15px' }}
        />
        
        
        
        
       <Button style={{backgroundColor: 'black',color:'white'}}  onClick={valueAdd}>Add Book</Button>
       
         </Box>
  
  )
}

export default Adminadd