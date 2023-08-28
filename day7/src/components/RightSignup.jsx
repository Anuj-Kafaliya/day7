import React from 'react'
import { useState } from 'react';
import '../style/RightSignup.css'

const RightSignup = () => {

  const[user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    conPassword: "",
    profile: "",
    mode: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setUser({...user,
        [name]: value
  })
  }

  const handleData = () => {
    const userObj = JSON.stringify(user);
    localStorage.setItem("user", userObj);
    const deserializedObj = JSON.parse(localStorage.getItem("user"));
    console.log(deserializedObj);
  }

  console.log(user);

  return (
    <div>
      <div>
        <form>
          <div className='signupForm'>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => handleChange(e)}
            />
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => handleChange(e)}
            />
            Password:
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
            />
            Confirm Password:
            <input
              type="password"
              name="conPassword"
              value={user.conPassword}
              onChange={(e) => handleChange(e)}
            />
            Profile:
            <input
              type="file"
              name="image"
              value={user.image}
              onChange={(e) => handleChange(e)}
            />
            Mode:
            <input
              type="radio"
              name="mode"
              value="admin"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="Admin">Admin</label>
            <input
              type="radio"
              name="mode"
              value="buyer"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="Buyer">Buyer</label>
            <button onClick={handleData}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RightSignup