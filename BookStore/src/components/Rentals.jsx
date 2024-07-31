import React , { useEffect, useState }from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Paper from '@mui/material/Paper'
import axios from 'axios';

const Rentals = () => {
    const [rows,setRows]=useState([]);
    //reject rent request
    function rejectRequest(a){
        axios.delete('http://localhost:3000/rejectreq/'+a).then((res)=>{
          alert("deleted")
          window.location.reload()
        }
        ).catch((error)=>{
          console.log('error:',error)
        }
        )
       }
       useEffect(() => {
        axios.get('http://localhost:3000/rent').then((res)=>{
          
           setRows(res.data)
        }).catch((error)=>{
          console.error('error fetching rent data:',error);
        });
      },[])
  return (
    <div>
    <TableContainer style={{marginTop:'5%' ,backgroundColor:'rgba(255, 255, 255, 0.8)'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        
          <TableRow>
            <TableCell align="left">Book Title</TableCell>
            <TableCell align="left">Author</TableCell>
            <TableCell align="right">Actions</TableCell>
            {/* <TableCell align="right">Username</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
           
            {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.author}</TableCell>
              <TableCell align="right">
              <Button
               variant="contained"
               style={{backgroundColor:'black',color:'white'}}
               onClick={() => rejectRequest(row._id)}
              >
                Reject
                </Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Rentals