import React from 'react'
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button} from '@mui/material';
import '../style/RightLogin.css';
import loginImage from '../assets/loginImg.jpg'

const RightLogin = () => {

 const handleNavigate = () => {
    navigate('/signup')
 }
  const [user, setUser] = useState({
    id: "",
    email: "",
    password: "",
    mode:"",
  });

  const [loginErrors, setLoginErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = JSON.parse(localStorage.getItem(`${user.email}`));
    const errors = {};

    if (!user.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
      errors.email = "Invalid Email";
    } else if(checkEmail(user.email)){
      errors.email = "Email is not registered"
    }

    if (!user.password) {
      errors.password = "Password is mandatory field";
    } else if (user?.password != userObj?.password) {
      errors.password = "Password is not correct";
    }

    setLoginErrors(errors);

    if (Object.keys(errors).length === 0) {
      const valueMode = userObj.mode;
      const valueId = userObj.id;
      user.mode = valueMode;
      user.id = valueId
      const userDetail = JSON.stringify(user);
      localStorage.setItem("loggedInUser", userDetail);
      navigate("/home");
      alert("You are logged in Successfully");
    }
  };
  
  const checkEmail = (email) => {
    for(let i = 0; i < localStorage.length; i++){
      if(localStorage.key(i) === email){
        return false;
      }
    }
    return true;
  }

  return (
    <div>
      <div className="render">
        <div className='left'>
          <img className="loginImage" src={loginImage} />
        </div>
        <div className="main">
          <form className="loginForm" >
          <div>
            <h3>LOGIN</h3>
          </div>
              <TextField sx={{width: 300}}
              label = "Email"
                type="email"
                name="email"
                value={user.email}
                placeholder="enter email"
                onChange={(e) => handleChange(e)}
              />
              
            {loginErrors.email && <span>{loginErrors.email}</span>}
        
              <TextField sx={{width: 300, mb:3}}
              label="Password"
                type="password"
                name="password"
                value={user.password}
                placeholder="enter password"
                onChange={(e) => handleChange(e)}
              />
             
            {loginErrors.password && <span>{loginErrors.password}</span>}
            <Button variant="contained" onClick={handleSubmit} sx={{mt:3, width: 400, borderRadius: 5}} >
              Login
            </Button>
            <Button variant="contained" onClick={handleNavigate} sx={{mt:5, width:400, borderRadius: 5}}>
              Want to create a new account??
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RightLogin