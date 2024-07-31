import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'; 
import { Grid } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../View.css';
import '../styles.css';
const Userdash = () => {
    const [rows,setRows] = useState([]);
    const [rentedBooks, setRentedBooks] = useState([]);
    const [likedBooks, setLikedBooks] = useState([]);
    const[count,setCount]=useState(0)
    const navigate=useNavigate()
   
    const toggleLike = async (book) => {
        const isLiked = likedBooks.some((likedBook) => likedBook._id === book._id);
        if(isLiked)  {
            // Book already liked, so unlike it
            const updatedLikedBooks = likedBooks.filter((likedBook) => likedBook._id !== book._id);
            setLikedBooks(updatedLikedBooks);
            await axios.put(`http://localhost:3000/removelike/${book._id}`);
        } else {
            // Book not liked yet, so like it
            const updatedLikedBooks = [...likedBooks, book];
            setLikedBooks(updatedLikedBooks);
            await axios.put(`http://localhost:3000/addlike/${book._id}`);
        }
    };
    const handleRent = async (book) => {
      try{
      const res= await axios.post('http://localhost:3000/addrental',book);
      if (res.status === 200){
            alert('Request sent!!')
            setRentedBooks((prevRentedBooks) => [...prevRentedBooks, book._id]);
                setRows((prevRows) =>
                    prevRows.map((row) =>
                        row._id === book._id ? { ...row, status: 'Not Available' } : row
                    
                    )
                    );
          }
        } catch (error) {
              console.error('Error submitting rent request:', error);
              alert('Error submitting rent request');
  
          };
  };
    function display(val){
      navigate('/single',{state:{val}})
    }
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
    <div className="view-container">
    <Grid  container spacing={3} sx={{paddingLeft: 4, paddingRight: 4}}>
      {rows.map((row) => {
        const likeCount = likedBooks.filter((likedBook) => likedBook._id === row._id).length;
        return(
        <Grid style={{marginTop:"3%"}} item key={row.id} xs={12} sm={6} md={4} >
    <Card >
      <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img src={row.imgsrc} onClick={()=>{display(row)}} alt={row.title} width="100" height="150" />
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
     <CardActions sx={{ justifyContent: 'centre' }}>
     <Button
                                    size="small"
                                    onClick={() => toggleLike(row)}
                                    startIcon={<FavoriteIcon color={likedBooks.some((likedBook) => likedBook._id === row._id) ? 'error' : 'action'} />}
                                >{likeCount}   Likes
                    
                                </Button>
                                
                                <Button
                                    size="small"
                                    variant="contained"
                                    style={{ backgroundColor: 'black', color: 'white' }}
                                    onClick={() => handleRent(row)}
                                    disabled={row.status === 'Not Available' || rentedBooks.includes(row._id)}
                                >
                                    {row.status === 'Not Available' || rentedBooks.includes(row._id) ? 'Not Available' : 'Rent'}
                                </Button>
                
      </CardActions>
    </Card>
    </Grid>
    );
  })}
  </Grid>
  </div>
  );
}

export default Userdash