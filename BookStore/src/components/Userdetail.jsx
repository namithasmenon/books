import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';
const Userdetail = () => {
    const [rows,setRows]=useState([]);
    function handleDelete(a){
        axios.delete('http://localhost:3000/removeuser/'+a).then((res)=>{
          alert("deleted")
          window.location.reload()
        }
        ).catch((error)=>{
          console.log('error:',error)
        }
        )
       }
    useEffect(() => {
                  axios.get('http://localhost:3000/user').then((res)=>{
                    
                     setRows(res.data)
                  }).catch((error)=>{
                    console.error('error fetching user data:',error);
                  });
                },[])
  return (
    <div>
    <TableContainer style={{marginTop:'5%' ,backgroundColor:'rgba(255, 255, 255, 0.8)'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Education</TableCell>
            <TableCell align="right">Phone NUmber</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           
            {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.place}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.education}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        style={{backgroundColor:'black',color:'white'}}
                                        onClick={() => handleDelete(row._id)}
                                    >
                                        Delete
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

export default Userdetail