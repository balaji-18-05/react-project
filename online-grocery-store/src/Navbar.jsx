import React from 'react'
import './navstyle.css'
import {Link} from 'react-router-dom'
export default function MenuAppBar() {
  return (
    <div className='navigationbar'>
      <div className='home'>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
      </div>
      <div className='categories'>
        shop by categories
      </div>
      <div className='nav' >
      Online-grocery-store
      </div>
    </div>
  )
}
