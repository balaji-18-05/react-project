import React from 'react'
import MenuAppBar from '../Navbar'
import { useState } from 'react';
export default function Diary() {
  const [isPopupVisible, setIsPopupVisible] = useState("");
      const popup = (msg) => {
        setIsPopupVisible(msg);
        setTimeout(() => {
          setIsPopupVisible(""); 
        }, 2000)
      };
  return (
    <>
    <MenuAppBar></MenuAppBar>
    <div className='image-container'>
        <table>
        <tr><img src='./dairy/milk.jpg' alt='Milk' className="img-main"></img></tr>
        <tr><td>Natural milk</td></tr>
        <tr><td>
            <button onClick={()=>popup("Milk")} className='cartbtn'>Add to cart</button>
        </td></tr>
        {isPopupVisible==="Milk" && (
        <div style={popupStyle}>
          <p>Milk added to cart</p>
        </div>
      )}
        </table>
        <table>
        <tr><img src='./dairy/butter.webp' alt='butter' className="img-main"></img></tr>
        <tr><td>Fresh Butter</td></tr>
        <tr><td><button onClick={()=>popup("Butter")} className='cartbtn'>Add to cart</button></td></tr>
        </table>
        {isPopupVisible==="Butter" && (
        <div style={popupStyle}>
          <p>Butter added to cart</p>
        </div>
      )}
        <table>
        <tr><img src='./dairy/ghee.jpg' alt='ghee' className="img-main"></img></tr>
        <tr><td>Ghee</td></tr>
        <tr><td><button  onClick={()=>popup("Ghee")}className='cartbtn'>Add to cart</button></td></tr>
        </table>
        {isPopupVisible==="Ghee" && (
        <div style={popupStyle}>
          <p>Ghee added to cart</p>
        </div>
      )}
        <table>
        <tr><img src='./dairy/paneer.jpg' alt='Paneer' className="img-main"></img></tr>
        <tr><td>Paneer</td></tr>
        <tr><td><button onClick={()=>popup("Paneer")} className='cartbtn'>Add to cart</button></td></tr>
        </table>
        {isPopupVisible==="Paneer" && (
        <div style={popupStyle}>
          <p>Paneer added to cart</p>
        </div>
      )}
        <table>
        <tr><img src='./dairy/yogurt.jpg' alt='yogurt' className="img-main"></img></tr>
        <tr><td>Yogurt</td></tr>
        <tr><td><button  onClick={()=>popup("Yogurt")}className='cartbtn'>Add to cart</button></td></tr>
        </table>
        {isPopupVisible==="Yogurt" && (
        <div style={popupStyle}>
          <p>Yogurt added to cart</p>
        </div>
      )}
        <table>
        <tr><img src='./dairy/cheese.jpg' alt='cheese' className="img-main"></img></tr>
        <tr><td>Cheese</td></tr>
        <tr><td><button onClick={()=>popup("Cheese")} className='cartbtn'>Add to cart</button></td></tr>
        </table>
        {isPopupVisible==="Cheese" && (
        <div style={popupStyle}>
          <p>Cheese added to cart</p>
        </div>
      )}
        <table>
        <tr><img src='./dairy/whippedcream.jpg' alt='whippedcream' className="img-main"></img></tr>
        <tr><td>Whipped cream</td></tr>
        <tr><td><button onClick={()=>popup("Whippedcream")} className='cartbtn'> Add to cart</button></td></tr>
        </table>
        {isPopupVisible==="Whippedcream" && (
        <div style={popupStyle}>
          <p>Whippedcream added to cart</p>
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