import React from "react";
import {TextField, Button,FormControl,InputLabel,Select, MenuItem,} from '@mui/material'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../assets/loginImg.jpg';
import image2 from '../assets/ghee.jpg'
import image3 from '../assets/rice.jpg'
import image4 from '../assets/wheat.jpg'
import image5 from '../assets/coffee.jpg'
import image6 from '../assets/egg.jpg'
import image7 from '../assets/milk.jpg'
import '../style/UpdateForm.css';

const UpdateItem = () => {
  const itemId = useLocation();

  const totItems = JSON?.parse(localStorage.getItem("items"));

  const obj = totItems?.find((obj) => obj.id == itemId.state);

  const filterItem = totItems?.filter((item) => {
    return item.id !== itemId.state;
  });

  const navigate = useNavigate();
  const [item, setItem] = useState(obj);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem(
      "items",
      JSON.stringify([
        ...filterItem,
        {
          id: itemId.state,
          name: item.name,
          image: item.image,
          desc: item.desc,
          price: item.price,
        },
      ])
    );
    navigate("/home");
  };
  return (
    <div>
      <div className="mainUpdate">
        
        <div className="subUpdateTwo">
          <form className="addForm">
            <h1>UPDATE ITEMS</h1>
            <TextField
              sx={{ width: 400 }}
              type="text"
              name="name"
              value={item.name}
              placeholder="enter item name"
              onChange={(e) => handleChange(e)}
            />
            <FormControl sx={{width: 400 , mt: 2, mb:4}}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Item Image
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  onChange={handleChange}
                  autoWidth
                  label="Item Image"
                  name="image"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={image2}>Ghee</MenuItem>
                  <MenuItem value={image3}>Rice</MenuItem>
                  <MenuItem value={image4}>Wheat</MenuItem>
                  <MenuItem value={image5}>Coffee</MenuItem>
                  <MenuItem value={image6}>Egg</MenuItem>
                  <MenuItem value={image7}>milk</MenuItem>

                </Select>
              </FormControl>

            <TextField
              sx={{ width: 400, mt: 0 }}
              type="text"
              name="desc"
              value={item.desc}
              placeholder="enter item description"
              onChange={(e) => handleChange(e)}
            />

            <TextField
              sx={{ width: 400, mt: 3 }}
              type="text"
              name="price"
              value={item.price}
              placeholder="enter item price"
              onChange={(e) => handleChange(e)}
            />

            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ width: 400, mt: 4, mb: 5 }}
            >
              Update Item
            </Button>
          </form>
        </div>
        <div className="subUpdateOne">
          <img src={image1} />
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;