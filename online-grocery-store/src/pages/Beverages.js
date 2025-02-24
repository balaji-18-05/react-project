import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import '../cart.css'
export default function Beverages() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const Beverages = [
    { id: 1, img: "/beverages/7-UP.webp", name: "7-UP", price: 50, oldPrice: 200 },
    { id: 2, img: "/beverages/Apple juice.jpg", name: "Apple juice", price: 50, oldPrice: 80 },
    { id: 3, img: "/beverages/Coco cola.jpg", name: " Coco cola", price: 120, oldPrice: 160 },
    { id: 4, img: "/beverages/Lime juice.jpg", name: "Lime juice", price: 110, oldPrice: 140 },
    { id: 5, img: "/beverages/Mango juice.jpg", name: "Mango juice", price: 50, oldPrice: 70 },
    { id: 6, img: "/beverages/Mountain Dew.jpg", name: "Mountain Dew", price: 150, oldPrice: 190 },
    { id: 7, img: "/beverages/Orange juice.jpg", name: "Orange juice", price: 5, oldPrice: 10 },
    { id: 8, img: "/beverages/Panner soda.webp", name: "Paneer soda", price: 50, oldPrice: 10 },
    { id: 9, img: "/beverages/pepsi.jpg", name: "Pepsi", price: 70, oldPrice: 90 },
    { id: 10, img: "/beverages/Red bull.webp", name: "Red bull", price: 150, oldPrice: 170 },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState("");

  const handleAddToCart = (beverage) => {
    addToCart(beverage);
    setIsPopupVisible(beverage.name);
    setTimeout(() => setIsPopupVisible(""), 1500);
  };

  return (
    <>
      <MenuAppBar />
      <h1 className="heading"> Beverages :</h1>
      <div className="image-container">
        {Beverages.map((beverage) => {
          const cartItem = cart.find((item) => item.id === beverage.id);
          return (
            <div key={beverage.id} className="img-card">
              <img src={beverage.img} alt={beverage.name} className="img-main" />
              <div className="content">

              <p>{beverage.name}</p>
              <p>₹{beverage.name === "Lemon" ? `${beverage.price}/piece` : `${beverage.price}/kg`}</p>
              <p>Discounted from <s>₹{beverage.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(beverage.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(beverage.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(beverage)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === beverage.name && <div style={popupStyle}>{beverage.name} added to cart</div>}
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
