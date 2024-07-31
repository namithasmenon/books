import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
const AdminDash = () => {
    const [rows, setRows] = useState([]);
  var navigate=useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3000/book')
      .then((res) => {
        setRows(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
<Grid  container spacing={3} sx={{paddingLeft: 4, paddingRight: 4}}>
      {rows.map((row) => (
        <Grid style={{marginTop:"3%"}} item key={row.id} xs={12} sm={6} md={4} >
    <Card >
      <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img src={row.imgsrc} alt={row.title} width="100" height="150" />
        <Typography gutterBottom variant="h5" component="div">
          {row.title}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          Author:{row.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating:{row.rating}
        </Typography>
        
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small">Update</Button>
              </CardActions>
    </Card>
    </Grid>
    ))}
  </Grid>
  )
}

export default AdminDash