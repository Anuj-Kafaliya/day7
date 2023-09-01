import React from 'react'
import {Typography,Button} from '@mui/material'
import {Box, AppBar, Toolbar, IconButton} from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Bar = () => {
  const navigate = useNavigate();
  const handleSubmit = () =>{
    localStorage.removeItem('loggedInUser')
    navigate('/login');
  }
  const handleProfile = () => {
    navigate('/profile')
  }

  const handleHome = () => {
    navigate('/home')
  }
  const handleCart = () => {
    navigate('/usercart');
  }
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            ShowShopper
          </Typography>
          <Button color="inherit" onClick={handleCart}>Cart</Button>
          <Button color="inherit" onClick={handleHome}>Home</Button>
          <Button color="inherit" onClick={handleProfile}>Profile</Button>
          <Button color="inherit" onClick={handleSubmit}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
  }

export default Bar;
