import React from 'react'
import MenuAppBar from '../Navbar'
import { useState } from 'react';
export default function Diary() {
  const [isPopupVisible, setIsPopupVisible] = useState("");
              const popup = (msg) => {
                setIsPopupVisible(msg);
                setTimeout(() => {
                  setIsPopupVisible(""); 
                }, 2000);
              };
      const pulsesimages =[
        {"id":1,"img":"/dairy/butter.webp","alt":"Butter"},
        {"id":2,"img":"/dairy/ghee.jpg","alt":"Ghee"},
        {"id":3,"img":"/dairy/milk.jpg","alt":"Milk"},
        {"id":4,"img":"/dairy/cheese.jpg","alt":"Cheese"},
        {"id":5,"img":"/dairy/milkshake.jpg","alt":"Milkshake"},
        {"id":6,"img":"/dairy/paneer.jpg","alt":"Panner"},
        {"id":7,"img":"/dairy/whippedcream.jpg","alt":"whipped cream"},
        {"id":8,"img":"/dairy/yogurt.jpg","alt":"Yogurt"},
      ]
    return (
    <>
    <MenuAppBar/>
    <h1 className='heading'>  Diary products :</h1>
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