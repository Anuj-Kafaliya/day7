import React from "react";
import Cart from "./Cart";
import "../style/Home.css";

const BuyerCart = () => {
  const loggedUser = JSON?.parse(localStorage.getItem("loggedInUser"));
  const userCart = JSON?.parse(localStorage.getItem(`${loggedUser.id}`));

  return (
    <div>
      {loggedUser.mode === "Buyer" && (
        <center>
          <h1>CART ITEMS</h1>
        </center>
      )}

      <div className="buyerCard">
        {console.log('hel')}
        {userCart?.map((item) => (
          <div key={item.id}>
            <Cart item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerCart;
