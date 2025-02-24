import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import '../cart.css'
export default function Floursandmasala() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const Floursandmasala = [
    { id: 1, img: "/flours/Aashirvaad wheat flour.jpg", name: "Aashirvaad wheat flour", price: 60, oldPrice: 65 },
    { id: 2, img: "/flours/Chicken masala.webp", name: "Chicken masala", price: 160, oldPrice: 170 },
    { id: 3, img: "/flours/Chilli powder.webp", name: "Red Chilli powder", price: 120, oldPrice: 130 },
    { id: 4, img: "/flours/Corn flour.jpg", name: "Corn flour", price: 70, oldPrice: 75 },
    { id: 5, img: "/flours/Curry masala.webp", name: "Curry masala", price: 80, oldPrice: 85 },
    { id: 6, img: "/flours/Fish masala.jpg", name: "Fish masala", price: 75, oldPrice: 80 },
    { id: 7, img: "/flours/Garam masala.jpg", name: "Garam masala", price: 55, oldPrice: 60 },
    { id: 8, img: "/flours/Maida.jpg", name: "Maida", price: 100, oldPrice: 110 },
    { id: 9, img: "/flours/Gram flour.webp", name: "Gram flour", price: 70, oldPrice: 80 },
    { id: 10, img: "/flours/Roasted rava.webp", name: "Roasted rava", price:50, oldPrice: 55 },
    { id: 11, img: "/flours/wheat rava.jpg", name: "wheat rava", price: 30, oldPrice:40 },
    { id: 12, img: "/flours/Rice flour.webp", name: "Rice flour", price: 90, oldPrice: 100 },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState("");

  const handleAddToCart = (fruit) => {
    addToCart(fruit);
    setIsPopupVisible(fruit.name);
    setTimeout(() => setIsPopupVisible(""), 1500);
  };

  return (
    <>
      <MenuAppBar />
      <h1 className="heading">Flours & masala :</h1>
      <div className="image-container">
        {Floursandmasala.map((fruit) => {
          const cartItem = cart.find((item) => item.id === fruit.id);
          return (
            <div key={fruit.id} className="img-card">
              <img src={fruit.img} alt={fruit.name} className="img-main" />
              <div className="content">

              <p>{fruit.name}</p>
              <p>₹{fruit.name === "Lemon" ? `${fruit.price}/piece` : `${fruit.price}/kg`}</p>
              <p>Discounted from <s>₹{fruit.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(fruit.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(fruit.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(fruit)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === fruit.name && <div style={popupStyle}>{fruit.name} added to cart</div>}
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
