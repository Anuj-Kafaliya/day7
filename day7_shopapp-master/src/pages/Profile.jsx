import React, { useState } from "react";
import "../style/Profile.css";

import {
  Avatar,
  Divider,
  ListItem,
  List,
  ListItemText,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Bar from "../components/Bar";
import image1 from "../assets/pro1.jpg";
import image2 from "../assets/pro2.jpg";
import image3 from "../assets/pro3.jpg";


const Profile = () => {


  const proData = JSON.parse(localStorage?.getItem("loggedInUser"));
  const guestItem = JSON.parse(localStorage?.getItem(`${proData.email}`));


  const [user, setUser] = useState({ ...guestItem });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const handleSubmit = () => {
    
    localStorage.setItem(`${proData.email}`, JSON.stringify(user));
    window.location.reload();
  };

  return (
    <div>
      <Bar />
      <div className="profileDiv">
        <div className="userDetail">
          <div className="userAvatar">
            <Avatar
              alt="Remy Sharp"
              src={guestItem?.profile}
              sx={{ ml: 2, mt: 3, width: 250, height: 250 }}
            />
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                mt: 5,
              }}
            >
              <ListItem>
                <ListItemText primary="Email" secondary={proData?.email} />
              </ListItem>
              <Divider variant="inset" component="li" sx={{ ml: 0 }} />
              <ListItem>
                <ListItemText primary="Name" secondary={guestItem?.name} />
              </ListItem>
              <Divider variant="inset" component="li" sx={{ ml: 0 }} />
              <ListItem>
                <ListItemText primary="Mode" secondary={guestItem?.mode} />
              </ListItem>
              <Divider variant="inset" component="li" sx={{ ml: 0 }} />
            </List>
          </div>
        </div>

        <div className="editUser">
          <form className="editForm">
            <div>
            <h1>EDIT PROFILE</h1>
            </div>
            
            <div>
              <TextField
                sx={{ width: 400, mb: 4, mt:2 }}
                label="Name"
                type="text"
                name="name"
                value={user.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <TextField
                sx={{ width: 400, mb: 4 }}
                label="Password"
                type="password"
                name="password"
                value={user.password}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <TextField
                sx={{ width: 400, mb: 4 }}
                label="Confirm Password"
                type="password"
                name="conPassword"
                value={user.conPassword}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="selectInput">
              <FormControl sx={{width: 400 , mt: 2, mb:4}}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Profile Image
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  onChange={handleChange}
                  autoWidth
                  label="Pofile"
                  name="profile"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={image1}>image1</MenuItem>
                  <MenuItem value={image2}>image2</MenuItem>
                  <MenuItem value={image3}>image3</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Button
              sx={{ width: 400, mb: 4 }}
              variant="contained"
              onClick={handleSubmit}
            >
              Edit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
