import React from "react"
import MenuAppBar from "../Navbar"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Fruits() {

    const [isPopupVisible, setIsPopupVisible] = useState("");
    const popup = (msg) => {
      setIsPopupVisible(msg);
      setTimeout(() => {
        setIsPopupVisible(""); 
      }, 2000);
    };
  return (
    <>
    <MenuAppBar/>
        <nav>
            <Link to="/"><button className="arrow">back</button></Link>
        </nav>
    <div className="image-container">
    <table>
        <tr><img src='./fruits/orange.webp' alt='Orange' className="img-main"></img></tr>
        <tr><td>Orange </td></tr>
        <tr><td><button onClick={()=>popup("Orange")} className="cartbtn">Add to cart</button></td></tr>
        {isPopupVisible=="Orange" && (
        <div style={popupStyle}>
          <p>Orange added to cart</p>
        </div>
      )}
    </table>
    <table>
        <tr><img src='./fruits/apple.jpg' alt='Apple' className="img-main"></img></tr>
        <tr><td>Apple</td></tr>
        <tr><td><button onClick={()=>popup('Apple')} className="cartbtn">Add to cart</button></td></tr>
    </table>
    {isPopupVisible =="Apple" && (
        <div style={popupStyle}>
          <p>Apple added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='./fruits/grapes.webp' alt='red grapes' className="img-main"></img></tr>
        <tr><td> Red Grapes </td></tr>
        <tr><td><button onClick={()=>popup('Red grapes')} className="cartbtn">Add to cart</button></td></tr>
    </table>
    {isPopupVisible=="Red grapes" && (
        <div style={popupStyle}>
          <p>Red grapes added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='./fruits/banana.jpg' alt='Banana' className="img-main"></img></tr>
        <tr><td>Banana </td></tr>
        <tr><td><button onClick={()=>popup('Banana')} className="cartbtn">Add to cart</button></td></tr>
    </table>
    {isPopupVisible=="Banana" && (
        <div style={popupStyle}>
          <p>Banana added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='./fruits/guava.webp' alt='Guava' className="img-main"></img></tr>
        <tr><td>Guava </td></tr>
        <tr><td><button onClick={()=>popup('Guava')} className="cartbtn">Add to cart</button></td></tr>
    </table>
    {isPopupVisible=="Guava" && (
        <div style={popupStyle}>
          <p>Guava added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='./fruits/kiwi.webp' alt='kiwi' className="img-main"></img></tr>
        <tr><td>kiwi </td></tr>
        <tr><td><button onClick={()=>popup('Kiwi')} className="cartbtn">Add to cart</button></td></tr>
    </table>
    {isPopupVisible=="Kiwi" && (
        <div style={popupStyle}>
          <p>Kiwi added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='./fruits/grapes2.jpeg' alt='green grapes' className="img-main"></img></tr>
        <tr><td>green grapes </td></tr>
        <tr><td><button onClick={()=>popup('Green grapes')} className="cartbtn">Add to cart</button></td></tr>
    </table>
    {isPopupVisible=="Green grapes" && (
        <div style={popupStyle}>
          <p>Green grapes added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='./fruits/lemon.webp' alt='lemon' className="img-main"></img></tr>
        <tr><td>lemon </td></tr>
        <tr><td><button onClick={()=>popup('Lemon')} className="cartbtn">Add to cart</button></td></tr>
    </table>
    {isPopupVisible=="Lemon" && (
        <div style={popupStyle}>
          <p>Lemon added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='./fruits/mango.jpg' alt='Mango' className="img-main"></img></tr>
        <tr><td>Mango </td></tr>
        <tr><td><button onClick={()=>popup('Mango')} className="cartbtn">Add to cart</button></td></tr>
    </table>
    {isPopupVisible=="Mango" && (
        <div style={popupStyle}>
          <p>Mango added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='./fruits/strawberry.jpeg' alt='strawberry' className="img-main"></img></tr>
        <tr><td>strawberry </td></tr>
        <tr><td><button onClick={()=>popup('Strawbery')} className="cartbtn">Add to cart</button></td></tr>
    </table>
    {isPopupVisible=="Strawbery" && (
        <div style={popupStyle}>
          <p>Strawbery added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='./fruits/pomegrante.jpeg' alt='pomegrante' className="img-main"></img></tr>
        <tr><td>Pomegrante </td></tr>
        <tr><td><button onClick={()=>popup('Pomegrante')} className="cartbtn">Add to cart</button></td></tr>
    </table>
    {isPopupVisible=="Pomegrante" && (
        <div style={popupStyle}>
          <p>Pomegrante added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='./fruits/watermelon.jpeg' alt='watermelon' className="img-main"></img></tr>
        <tr><td>watermelon </td></tr>
        <tr><td><button  onClick={()=>popup('Watermelon')} className="cartbtn">Add to cart</button></td></tr>
    </table>
    {isPopupVisible=="Watermelon" && (
        <div style={popupStyle}>
          <p>Watermelon added to cart</p>
        </div>
      )}
    </div>
    </>
  
  )
}

const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
  };