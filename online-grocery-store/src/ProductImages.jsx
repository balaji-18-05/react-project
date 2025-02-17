import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export  function Images() {
     const [isPopupVisible, setIsPopupVisible] = useState("");
          const popup = (msg) => {
            setIsPopupVisible(msg);
            setTimeout(() => {
              setIsPopupVisible(""); 
            }, 2000)
          };
  return (
  <>
  <center>
    <div class='image-container-main'>
        <table>
            <tr>
                <nav>
                    <Link to="/Fruits"><img src='/products/fruits.jpeg' alt='fresh products' className='img-cat'/></Link>
                </nav>
            </tr>
            <tr><td>Fruits</td></tr>
        </table>
        <table>
            <tr>
            <nav>
                <Link to="/dairy"><img src='/products/diaryimg.jpg' alt='diary products'className='img-cat'/></Link>
            </nav>
            </tr>
            <tr><td>Dairy Products</td></tr>
        </table>
        <table>
            <tr>
                <nav><Link to="/riceandgrains"><img src='/products/grains.jpg' alt='food grains'className='img-cat'/></Link></nav>
            </tr>
            <tr><td>Rice & Grains</td></tr>
        </table>
        <table>
            <tr>
                <nav>
                    <Link to="/vegetables"> <img src='/products/vegetables.jpg' alt='vegeies'className='img-cat'/></Link>
                </nav>
            </tr>
            <tr><td>Vegetables</td></tr>
        </table>
        <table>
            <tr>
                <nav><Link to="oilandpulses"><img src='/products/oilandpulses.jpg' alt='oil'className='img-cat'/></Link></nav>
            </tr>
            <tr><td>Oil & Pulses</td></tr>
        </table>
       
        <table>
            <tr><img src='/products/softdrinks.jpg' alt='softdrinks'className='img-cat'/></tr>
            <tr><td>Beverages</td></tr>
        </table>
        <table>
            <tr><img src='/products/cakesandbiscits.jpg' alt='cakesandbiscits'className='img-cat'/></tr>
            <tr><td>Cakes & Biscits</td></tr>
        </table>
        <table>
            <tr><img src='/products/snack.jpeg' alt='snack'className='img-cat'/></tr>
            <tr><td>Snacks & Chocolate</td></tr>
        </table>
        <table>
            <tr><img src='/products/beautyandhygiene.jpeg' alt='beautyandhygiene'className='img-cat'/></tr>
            <tr><td>Beauty & Hygiene</td></tr>
        </table>
        <table>
            <tr><img src='/products/household.jpeg' alt='household'className='img-cat'/></tr>
            <tr><td>cleaning & Household</td></tr>
        </table>
        <table>
            <tr><img src='/products/flour.jpg' alt='Flours and Masala'className='img-cat'/></tr>
            <tr><td>Flours  Masala</td></tr>
        </table>
    </div>
    </center>
    <h1>Today's deals :</h1>
    <span id='offers'>Offers</span>
    <span id='off2'>on Products upto </span>
    <span id='off3'>50%</span>
    <center>
    <div className='image-offers-container'>
    <table>
        <tr><img src='/fruits/apple.jpg' alt='apple' className="img-offers"></img></tr>
        <tr><td><button className='cartbtn' onClick={()=>popup("Apple")}>Add to cart</button></td></tr>
        <tr><td> Fresh Apple ₹150/kg</td></tr>
        <tr><td >25% discount on <span className='strike'>₹200</span></td></tr>
    </table>
    {isPopupVisible==="Apple" && (
        <div style={popupStyle}>
          <p>Apple added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='/fruits/grapes2.jpeg' alt='Green grapes' className="img-offers"></img></tr>
        <tr><td><button className='cartbtn' onClick={()=>popup("Grapes2")}>Add to cart</button></td></tr>
        <tr><td>Green grapes ₹90/kg</td></tr>
        <tr><td >30% discount on <span className='strike'>₹63</span></td></tr>
    </table>
    {isPopupVisible==="Grapes2" && (
        <div style={popupStyle}>
          <p>Green grapes added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='/fruits/guava.webp' alt='Guava' className="img-offers"></img></tr>
        <tr><td><button className='cartbtn' onClick={()=>popup("Guava")}>Add to cart</button></td></tr>
        <tr><td>Guava ₹50/kg</td></tr>
        <tr><td >50% discount on <span className='strike'>₹100</span></td></tr>
    </table>
    {isPopupVisible==="Guava" && (
        <div style={popupStyle}>
          <p>Guava added to cart</p>
        </div>
      )}
    <table>
        <tr><img src='/dairy/butter.webp' alt='Butter' className="img-offers"></img></tr>
        <tr><td><button  onClick={()=>popup("Butter")} className='cartbtn'>Add to cart</button></td></tr>
        <tr><td>Butter ₹180/kg</td></tr>
        <tr><td >40% discount on <span className='strike'>₹300</span></td></tr>
    </table>
    {isPopupVisible==="Butter" && (
        <div style={popupStyle}>
          <p>Butter added to cart</p>
        </div>
      )}
        <table>
        <tr><img src='/dairy/ghee.jpg' alt='ghee' className="img-main"></img></tr>
        <tr><td><button  onClick={()=>popup("Ghee")}className='cartbtn'>Add to cart</button></td></tr>
        <tr><td>Ghee ₹510/kg</td></tr>
        <tr><td>15% discount on <span className='strike'>₹600</span></td></tr>
        </table>
        {isPopupVisible==="Ghee" && (
        <div style={popupStyle}>
          <p>Ghee added to cart</p>
        </div>
      )}
      <table>
           <tr><img src='/vegetables/cabbage.jpg' alt='Cabbage' className="img-main"></img></tr>
           <tr><td><button onClick={()=>popup("Cabbage")} className="cartbtn">Add to cart</button></td></tr>
           <tr><td>Cabbage ₹40/kg</td></tr>
           <tr><td>25% discount on <span className='strike'>₹50</span></td></tr>
           {isPopupVisible=="Cabbage" && (
           <div style={popupStyle}>
             <p>Cabbage added to cart</p>
           </div>
         )}
       </table>
       <table>
           <tr><img src='/vegetables/onion.jpg' alt='Onion' className="img-main"></img></tr>
           <tr><td><button onClick={()=>popup("Onion")} className="cartbtn">Add to cart</button></td></tr>
           <tr><td>Onion ₹70/kg</td></tr>
           <tr><td>30% discount on <span className='strike'>₹100/kg</span></td></tr>
           {isPopupVisible=="Onion" && (
           <div style={popupStyle}>
             <p>Onion added to cart</p>
           </div>
         )}
       </table>
    </div>
    
    </center>
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