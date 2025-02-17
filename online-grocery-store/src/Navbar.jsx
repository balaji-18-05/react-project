import React from 'react'
import './navstyle.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
export default function MenuAppBar() {
  let count=0;
  const[setbtn,onsetbtn]=useState(false);
  const clickable=()=>{
    onsetbtn(!setbtn);
  }
  const handleClickOutside = (event) => {
    if (setbtn && !event.target.closest('.categorystyle') && !event.target.closest('.categorystyle')) {
      onsetbtn(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setbtn]);
  
  return (
    <div className="navigationbar">
         <Link to='/'><p className='home'>Home</p></Link>

        <p className='cat' >Shop by categories</p>
        {
          setbtn==true && 
          <div className='categorystyle'>
            <ul>
              <li>Fruits</li>
              <li>Vegetables</li>
            </ul>
        </div>
        } 
        <Link to='/loginpage'><p className="home">Login/Sign up</p></Link>
        <p className="home">cart</p>
    </div>
  )
}

