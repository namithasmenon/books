import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import '../single.css'

import Start from './Start';

const Single = (book) => {
    const[form,setform]=useState({
      imgsrc:book ? book.imgsrc ||'':'',
      title:book ? book.title || '':'',
      author:book ? book.author ||'':'',
      rating:book?book.rating||'':''
    })
    const location=useLocation();
    const { val } = location.state || {};
  console.log('val:', val);
  useEffect(()=>{
    if(location.state!=null){
      setform({...form,
      imgsrc:location.state.val.imgsrc,
      title:location.state.val.title,
      author:location.state.val.author,
      rating:location.state.val.rating
      })
    }
  })
  return (
    <div className='style1'>
    {val ? (
      <>
        <h2>{val.title}</h2>
        <img src={val.imgsrc} alt='image'></img>
        <p>Author: {val.author}</p>
        <p>Rating: {val.rating}</p>
      </>
    ) : (
      <p>No data available</p>
    )}
  </div>
  )
}

export default Single