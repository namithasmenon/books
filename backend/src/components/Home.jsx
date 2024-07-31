import { Box, Button, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'
export const Home = () => {
  return (
    <Box   style={{marginTop:'20%',color:'white'}} sx={{ mt: 5, textAlign: 'center', color: 'white' }}>
                <Typography  variant="h3">Welcome to Book Store</Typography>
                {/*<Typography variant="body1">Explore our collection of books.</Typography>*/}
                <Link to={'/view'}><Button style={{color:'white'}}size='small'>EXPLORE OUR COLLECTION OF BOOKS</Button></Link>
  </Box>
  )
}
