import React from 'react'
import { useState } from 'react';
import '../style/RightSignup.css'
import { TextField,FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Typography } from '@mui/material';
import signupImage from '../assets/signupImg.jpg';
import {useNavigate} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'; 

const RightSignup = () => {

  const[user, setUser] = useState({
    id: uuidv4(),
    name: "",
    password: "",
    email: "",
    conPassword: "",
    profile: "",
    mode: "admin"
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setUser({...user,
        [name]: value
  })
  }

  const[valError, setValError] = useState({});
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!user.name.trim()) {
      errors.name = "Name is required";
    }
    if (!user.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
      errors.email = "Invalid Email";
    } else if (checkEmail(user.email)) {
      errors.email = "Email is already registered";
    }
    if (!user.password.trim()) {
      errors.password = "Password is required";
    } else if (user.password.length < 6) {
      errors.password = "Password length must be greater than 6";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        user.password
      )
    ) {
      errors.password = "Invalid password format";
    }
    if (user.password !== user.conPassword) {
      errors.conPassword = "Passwords don't match";
    }
    if (!user.mode || user.mode === "undefined") {
      errors.mode = "Select any mode";
    }
    console.log(errors);
    setValError(errors);
    if (Object.keys(errors).length === 0) {
      const userObj = JSON.stringify(user);
      localStorage.setItem(`${user.email}`, userObj);
      alert("Form successfully submitted!!!");
      navigate('/login')
    }
    console.log(valError);
  };

  const handleRouteToLogin = () => {
    navigate('/login');
  }
  const checkEmail = (email) => {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === email) {
        return true;
      }
    }
    return false;
  };

  console.log(user);

  return (
    <div>
    <div className='sign'>
      <div className="signImage">
        <img src={signupImage} className="signupImage" />
      </div>
      <div className="signupDiv">
        <form className="signupForm">
        <div>
        <Typography variant='h4'>
          <b>REGISTER</b>
        </Typography>
        </div>
          <div>
            <TextField
              sx={{ width: 400 }}
              label="Name"
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {valError.name && <span>{valError.name}</span>}
          <div>
            <TextField
              sx={{ width: 400 }}
              label="Email"
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {valError.email && <span>{valError.email}</span>}
          <div>
            <TextField
              sx={{ width: 400 }}
              label="Password"
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {valError.password && <span>{valError.password}</span>}
          <div>
            <TextField
              sx={{ width: 400 }}
              label="Confirm Password"
              type="password"
              name="conPassword"
              value={user.conPassword}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {valError.conPassword && <span>{valError.conPassword}</span>}
        
          <div>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Mode
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                value={user.mode}
                name="row-radio-buttons-group"
                onChange={(e) => handleChange(e)}
               
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio/>}
                  label="Admin"
                  name="mode"
                />
                <FormControlLabel
                  value="Buyer"
                  control={<Radio />}
                  label="Buyer"
                  name="mode"
                  sx={{ml:10}}
                />
              </RadioGroup>
            </FormControl>
            {valError.mode && <span>{valError.mode}</span>}
          </div>
          <div>
          <Button
            sx={{ width: 400, borderRadius: 5}}
            variant="contained"
            onClick={handleSubmit}
          >
            Register
          </Button>
          </div>
          <div>
          <Button
            sx={{ width: 400, borderRadius: 5}}
            variant="contained"
            onClick={handleRouteToLogin}
          >
            Already Have an account
          </Button>
          </div>
          
        </form>
      </div>
      </div>
    </div>
  );
}

export default RightSignup