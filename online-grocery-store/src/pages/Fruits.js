import React from "react"
import MenuAppBar from "../Navbar"
import { useState } from "react";
export default function Fruits() {
const [isPopupVisible, setIsPopupVisible] = useState("");
            const popup = (msg) => {
              setIsPopupVisible(msg);
              setTimeout(() => {
                setIsPopupVisible(""); 
              }, 2000);
            };
    const pulsesimages =[
      {"id":1,"img":"/fruits/apple.jpg","alt":"Apple"},
      {"id":2,"img":"/fruits/banana.jpg","alt":" Banana"},
      {"id":3,"img":"/fruits/grapes.webp","alt":"Red grapes"},
      {"id":4,"img":"/fruits/grapes2.jpeg","alt":"Green grapes"},
      {"id":5,"img":"/fruits/guava.webp","alt":"kiwi"},
      {"id":6,"img":"/fruits/kiwi.webp","alt":"lemon"},
      {"id":7,"img":"/fruits/lemon.webp","alt":"Lemon"},
      {"id":8,"img":"/fruits/mango.jpg","alt":"Mango"},
      {"id":9,"img":"/fruits/orange.webp","alt":"Orange"},
      {"id":10,"img":"/fruits/pomegrante.jpeg","alt":"Pomegranate"},
      {"id":11,"img":"/fruits/strawberry.jpeg","alt":"Strawberry"}, 
      {"id":12,"img":"/fruits/watermelon.jpeg","alt":"Watermelon"},
    ];
  return (
  <>
  <MenuAppBar/>
  <h1 className='heading'>  Fresh Fruits :</h1>
  <div className='image-container'>{
    
      pulsesimages.map((itr)=>(
          <table>
             <img src={itr.img} alt={itr.alt} className='img-main' ></img>
             <tr><td>{itr.alt}</td></tr>
             <tr><td><button onClick={()=>popup(itr.alt)} className="cartbtn" >Add to cart</button></td></tr>
             {isPopupVisible==itr.alt && (
             <div style={popupStyle}>
               <p>{itr.alt} added to cart</p>
             </div>
           )}
         </table>
      )
      )
    }
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