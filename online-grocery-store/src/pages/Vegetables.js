import React from 'react'
import { useState } from 'react';
import MenuAppBar from '../Navbar';
import Footer from '../Footer';
export default function Vegetables() {
    const [isPopupVisible, setIsPopupVisible] = useState("");
            const popup = (msg) => {
              setIsPopupVisible(msg);
              setTimeout(() => {
                setIsPopupVisible(""); 
              }, 2000);
            };
    const pulsesimages =[
      {"id":1,"img":"/vegetables/banana stem.jpg","alt":"Banana stem"},
      {"id":2,"img":"/vegetables/beans.jpg","alt":"  Beans"},
      {"id":3,"img":"/vegetables/beetroot.jpg","alt":"Beetroot"},
      {"id":4,"img":"/vegetables/brinjal.jpg","alt":"Brinjal"},
      {"id":5,"img":"/vegetables/cabbage.jpg","alt":"cabbage"},
      {"id":6,"img":"/vegetables/carrot.jpg","alt":"carrot"},
      {"id":7,"img":"/vegetables/green-banana.jpg","alt":"Green banana"},
      {"id":8,"img":"/vegetables/onion.jpg","alt":"Big onion"},
      {"id":9,"img":"/vegetables/potato.jpg","alt":"Potato "},
      {"id":10,"img":"/vegetables/pumpkin.jpg","alt":"Pumpkin "},
      {"id":11,"img":"/vegetables/radish.jpg","alt":"Radish"}, 
      {"id":12,"img":"/vegetables/small onion.jpg","alt":"Small onion "},  
      {"id":13,"img":"/vegetables/tomato.jpg","alt":"Tomato "},  
    ];
  return (
  <>
  <MenuAppBar/>
  <h1 className='heading'>  Fresh Vegetables :</h1>
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
  <Footer/>
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