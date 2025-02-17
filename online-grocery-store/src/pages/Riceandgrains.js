import React from 'react'
import { useState } from 'react';
import MenuAppBar from '../Navbar';
export default function Riceandgrains() {
  const [isPopupVisible, setIsPopupVisible] = useState("");
          const popup = (msg) => {
            setIsPopupVisible(msg);
            setTimeout(() => {
              setIsPopupVisible(""); 
            }, 2000);
          };
  const pulsesimages =[
    {"id":1,"img":"/riceandgrains/barley.jpg","alt":"Barley"},
    {"id":2,"img":"/riceandgrains/corn.jpg","alt":" Sweet corn"},
    {"id":3,"img":"/riceandgrains/millet.jpg","alt":"Millet"},
    {"id":4,"img":"/riceandgrains/oats.jpg","alt":"oats"},
    {"id":5,"img":"/riceandgrains/wheat.jpg","alt":"Wheat"},
    {"id":6,"img":"/riceandgrains/basmathi.webp","alt":"Premium Basmathi rice"},
    {"id":7,"img":"/riceandgrains/chennai basmathi.jpg","alt":"Chennai gate basmathi rice"},
    {"id":8,"img":"/riceandgrains/Ir20.webp","alt":"IR 20 rice"},
    {"id":9,"img":"/riceandgrains/mappilai sambha.jpg","alt":"Mappilai sambha rice"},
    {"id":10,"img":"/riceandgrains/ponni.jpg","alt":"ponni rice"},
    {"id":11,"img":"/riceandgrains/rajabogam.jpg","alt":"Rajabogam"}, 
    {"id":12,"img":"/riceandgrains/seeraga sambha.jpg","alt":"seeraga sambha rice"},  
  ];
return (
<>
<MenuAppBar/>
<h1 className='heading'> Rice and Grains :</h1>
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