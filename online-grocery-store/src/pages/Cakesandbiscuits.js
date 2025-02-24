import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import '../cart.css'
export default function Cakesandbiscuits() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const Cakesandbiscuits = [
    { id: 1, img: "/cakesandbiscuits/Bour bon.jpg", name: "Bour bon", price: 10, oldPrice: 50 },
    { id: 2, img: "/cakesandbiscuits/Elite cupcake.jpg", name: "Elite cupcake", price: 30, oldPrice: 35 },
    { id: 3, img: "/cakesandbiscuits/50-50.webp", name: "Red 50-50", price: 10, oldPrice: 12 },
    { id: 4, img: "/cakesandbiscuits/Chocolate cakes.webp", name: "Chocolate cakes", price: 30, oldPrice: 40 },
    { id: 5, img: "/cakesandbiscuits/Good day biscuit.webp", name: "Good day biscuit", price: 10, oldPrice: 15 },
    { id: 6, img: "/cakesandbiscuits/Happy happy biscuit.jpg", name: "Happy happy biscuit", price: 10, oldPrice: 15 },
    { id: 7, img: "/cakesandbiscuits/Horlicks biscuit.webp", name: "Horlicks biscuits", price: 35, oldPrice: 40 },
    { id: 8, img: "/cakesandbiscuits/Milk bikis.webp", name: "Milk bikis", price: 30, oldPrice: 35 },
    { id: 9, img: "/cakesandbiscuits/Nutri choice.webp", name: "Nutri choice", price: 70, oldPrice: 90 },
    { id: 10, img: "/cakesandbiscuits/Oreo Biscuit.jpg", name: "Oreo Biscuit", price: 60, oldPrice: 70 },
    { id: 11, img: "/cakesandbiscuits/Parle-G.webp", name: "Parle-G", price: 30, oldPrice: 20 },
    { id: 12, img: "/cakesandbiscuits/Pine apple cakes.webp", name: "Pine apple cakes", price: 50, oldPrice: 60 },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState("");

  const handleAddToCart = (biscuits) => {
    addToCart(biscuits);
    setIsPopupVisible(biscuits.name);
    setTimeout(() => setIsPopupVisible(""), 1500);
  };

  return (
    <>
      <MenuAppBar />
      <h1 className="heading">Cakes &  Biscuits :</h1>
      <div className="image-container">
        {Cakesandbiscuits.map((biscuits) => {
          const cartItem = cart.find((item) => item.id === biscuits.id);
          return (
            <div key={biscuits.id} className="img-card">
              <img src={biscuits.img} alt={biscuits.name} className="img-main" />
              <div className="content">

              <p>{biscuits.name}</p>
              <p>₹{biscuits.name === "Lemon" ? `${biscuits.price}/piece` : `${biscuits.price}/kg`}</p>
              <p>Discounted from <s>₹{biscuits.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(biscuits.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(biscuits.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(biscuits)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === biscuits.name && <div style={popupStyle}>{biscuits.name} added to cart</div>}
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

const popupStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "white",
  borderRadius: "8px",
  textAlign: "center",
};
