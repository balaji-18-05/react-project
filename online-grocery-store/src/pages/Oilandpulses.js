import React from 'react'
import MenuAppBar from '../Navbar';
import { useState } from 'react';
export default function Oilandpulses() {
  const [isPopupVisible, setIsPopupVisible] = useState("");
          const popup = (msg) => {
            setIsPopupVisible(msg);
            setTimeout(() => {
              setIsPopupVisible(""); 
            }, 2000);
          };
  const pulsesimages =[
    {"id":1,"img":"/pulses/sundal.jpg","alt":"white channa"},
    {"id":2,"img":"/pulses/toor dhal.webp","alt":"toor dhal"},
    {"id":3,"img":"/pulses/green peas.jpg","alt":"Green peas"},
    {"id":3,"img":"/pulses/cow peas.jpg","alt":"cow peas"},
    {"id":3,"img":"/pulses/green gram.jpg","alt":"green gram"},
    {"id":3,"img":"/pulses/black channa.webp","alt":"black channa"},
    {"id":3,"img":"/pulses/urad dhal.jpg","alt":"urad dhal"},
    {"id":3,"img":"/pulses/black urad dhal.jpg","alt":"black urad dhal"},
    {"id":3,"img":"/pulses/horse gram.jpg","alt":"horse gram"},
    {"id":3,"img":"/pulses/Coconut oil.jpg","alt":"Coconut oil"},
    {"id":3,"img":"/pulses/Mustard oil.webp","alt":"Mustard oil"}, 
    {"id":3,"img":"/pulses/Palm oil.webp","alt":"Palm oil"}, 
    {"id":3,"img":"/pulses/soyabean oil.webp","alt":"soyabean oil"}, 
    {"id":3,"img":"/pulses/Rice bran oil.webp","alt":"Rice bran oil"}, 
    {"id":3,"img":"/pulses/sunflower oil.webp","alt":"sunflower oil"}, 
  ];
return (
<>
<MenuAppBar/>
<h1 className='heading'>Oil and Pulses</h1>
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