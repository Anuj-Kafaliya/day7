import { TextField, Button,InputLabel,FormControl,Select, MenuItem } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import '../style/AddForm.css'
import '../style/Home.css'
import {v4 as uuidv4} from 'uuid';
import image1 from '../assets/ghee.jpg'
import image2 from '../assets/rice.jpg'
import image3 from '../assets/wheat.jpg'
import image4 from '../assets/coffee.jpg'
import image5 from '../assets/egg.jpg'
import image6 from '../assets/milk.jpg'

const AddItem = () => {

  const user = JSON?.parse(localStorage.getItem('loggedInUser'));

  const [item, setItem] = useState({
    id: uuidv4(),
    name: "",
    image: "",
    desc: "",
    price: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value
    })
  }

  let itemList = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminItem = JSON.parse(localStorage.getItem('items')) || [];
    localStorage.setItem('items', JSON.stringify([...adminItem, item]));
    itemList = JSON.parse(localStorage.getItem("items"));
    window.location.reload();
  }

  return (
    <div>
      {
        user?.mode === 'admin' &&
        
        <div className='itemAdd'>
          <form className='addForm'>
            <center><h1>ADD ITEMS</h1></center>
            <TextField
              sx={{ width: 400 }}
              label="Item Name"
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
                  <MenuItem value={image1}>Ghee</MenuItem>
                  <MenuItem value={image2}>Rice</MenuItem>
                  <MenuItem value={image3}>Wheat</MenuItem>
                  <MenuItem value={image4}>Coffee</MenuItem>
                  <MenuItem value={image5}>Egg</MenuItem>
                  <MenuItem value={image6}>milk</MenuItem>

                </Select>
              </FormControl>
          
            <TextField
              sx={{ width: 400, mt: 0}}
              label="Description"
              type="text"
              name="desc"
              value={item.desc}
              placeholder="enter item description"
              onChange={(e) => handleChange(e)}
            />

            <TextField
              sx={{ width: 400, mt: 3 }}
              label="Price"
              type="text"
              name="price"
              value={item.price}
              placeholder="enter item price"
              onChange={(e) => handleChange(e)}
            />

            <Button variant="contained" onClick={handleSubmit} sx={{ width: 400, mt: 4, mb: 5 }}>
              ADD
            </Button>

          </form>
        </div>
      }


    </div>

  );
}

export default AddItem