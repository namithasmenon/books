import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import { Home } from './components/Home'
import Start from './components/Start'
import { Box, Container, Typography } from '@mui/material'
import Login from './components/Login'
import { View } from './components/View'
import Viewnav from './components/Viewnav'
import Admin from './components/Admin'
import AdminDash from './components/AdminDash'
import Adminnav from './components/Adminnav'

import { useLocation } from 'react-router-dom';
import Single from './components/Single'
import Adminadd from './components/Adminadd'
import Userdetail from './components/Userdetail'
import Userdash from './components/Userdash'
import Rentals from './components/Rentals'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  const renderNavbar = () => {
    if (location.pathname === '/userdash') {
      return <Viewnav />;
    }else if(location.pathname ==='/ad'){
      return <Adminnav/>
    } else if(location.pathname ==='/adminadd'){
      return <Adminnav/>}
      else if(location.pathname ==='/userdetail'){
        return <Adminnav/>}
        else if(location.pathname ==='/rentals'){
          return <Adminnav/>}
    
    else {
      return <Start/>;
    }
  };
  return (
    <>
    {renderNavbar()}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
    <Routes>
    <Route path='/'element={<Home/>}>Home</Route>
    {/*<Route path='/'element={<Start/>}>navbar</Route>*/}
      <Route path='/add'element={<Login/>}>Login</Route>
      <Route path='/sign' element={<Add/>}>Signup</Route>
      <Route path='/view' element={<View/>}>View</Route>
      <Route path='/admin' element={<Admin/>}>Admin</Route>
      <Route path='/ad' element={<AdminDash/>}>AdminDash</Route>
      <Route path='/single'element={<Single/>}>Single</Route>
      <Route path='/adminadd'element={<Adminadd/>}>Adminadd</Route>
      <Route path='/userdetail'element={<Userdetail/>}>userdetail</Route>
      <Route path='/userdash'element={<Userdash/>}>userdash</Route>
      <Route path='/rentals'element={<Rentals/>}>Rentals</Route>
    </Routes>
    </Container>
    </>   
  )
}

export default App
