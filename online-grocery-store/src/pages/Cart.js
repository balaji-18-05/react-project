import React, { useContext, useState } from "react";
import '../cart.css'
import { CartContext } from "./CartContext";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
export default function Cart() {

  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    
    <div>
      <MenuAppBar></MenuAppBar>
      <div className="cart_heading">
      <img src="/gif/cartgif.gif"></img>
      <h2 > My Cart</h2>
      </div>
      
      {cart.length === 0 ? (
        <p className="cart_empty">
          <marquee direction="Right" loop="" >Your cart is empty!</marquee>
        </p>
      ) : (
        <>
          <div className="image-container">
            {cart.map((item) => (
              <div key={item.id} className="img-card">
                <img src={item.img} alt={item.name} className="img-main" />
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>₹{`${item.price}`}</p>

                  <p>Discounted from <s>₹{item.oldPrice}</s></p>
                  <p>Quantity:
                    <button onClick={() => decreaseQuantity(item.id)} className="plus_btn">➖</button>
                    {item.quantity}
                    <button onClick={() => increaseQuantity(item.id)} className="plus_btn">➕</button>
                  </p>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="total">Total: ₹{totalAmount}</h2>
        </>
      )}
      <Footer/>
    </div>
  );
}
