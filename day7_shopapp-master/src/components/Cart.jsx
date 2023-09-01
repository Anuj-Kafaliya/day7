import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
  CardContent,
  CardActions,Paper,Grid,ButtonBase,styled
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom'
import '../style/Cart.css';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Cart = (item) => {
  const pathName = useLocation().pathname;
  const navigate = useNavigate();

  const user = JSON?.parse(localStorage.getItem('loggedInUser'));
  
  const userCart = JSON.parse(localStorage.getItem(`${user.id}`)) || [];
  const items = JSON?.parse(localStorage.getItem('items'));
  
 
  const handleAddToCart = (e) => {
    const itemId = e.target.id;
    const obj = items.find(obj => obj.id == itemId);
    const preCartt = JSON.parse(localStorage.getItem(`${user.id}`)) || {};
    console.log(user.id)
    if(Object.keys(preCartt).length == 0){
      localStorage.setItem(`${user.id}`,JSON.stringify([obj]))
    }
    else{
      localStorage.setItem(`${user.id}`,JSON.stringify([...preCartt,obj])) 
    }
    
  }


  const handleDeleteCart = (e) => {
    const itemId = e.target.id;
    const itemCartList = userCart?.filter((item) => ((item.id) !== itemId));
    localStorage.setItem(`${user.id}`,JSON.stringify(itemCartList))
    window.location.reload();    
  }
 
  const handleDeleteItem = (e) => {
    const itemId = e.target.id;
    const itemList = items?.filter((item) => item.id !== itemId);
    localStorage.setItem("items", JSON.stringify(itemList));
    window.location.reload();
  };

  const handleUpdateItem = (e) => {
    navigate("/update", { state: e.target.id });
  };

  return (
    <div className="mainGroup">
        {
          pathName === '/home' && (
            <Card sx={{ maxWidth: 345, ml: 10 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.item.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.item.desc}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {pathName !== "/usercart" && (
                <Button
                  size="small"
                  color="primary"
                  id={item.item.id}
                  onClick={(e) => handleAddToCart(e)}
                >
                  Add to cart
                </Button>
              )}
              {user?.mode != "Buyer" && pathName !== "/usercart" && (
                <Button
                  size="small"
                  color="primary"
                  id={item.item.id}
                  onClick={(e) => {
                    handleDeleteItem(e);
                  }}
                >
                  Delete item
                </Button>
              )}
              {pathName === "/usercart" && (
                <Button
                  size="small"
                  color="primary"
                  id={item.item.id}
                  onClick={(e) => {
                    handleDeleteCart(e);
                  }}
                >
                  Delete from cart
                </Button>
              )}
              {user?.mode === "admin" && pathName != "/usercart" && (
                <Button
                  size="small"
                  color="primary"
                  id={item.item.id}
                  onClick={(e) => {
                    handleUpdateItem(e);
                  }}
                >
                  Update item
                </Button>
              )}
            </CardActions>
          </Card>
          )
        }
        
     {
      pathName === '/usercart' && (
        <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
          <Img alt="complex" src={item.item.image} />
        </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.item.desc}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                {pathName === "/usercart" && (
                  <Button
                    size="small"
                    color="primary"
                    id={item.item.id}
                    onClick={(e) => {
                      handleDeleteCart(e);
                    }}
                  >
                    Delete from cart
                  </Button>
                )}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {item.item.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      )
     }
    
    </div>
    
  );
};

export default Cart;
