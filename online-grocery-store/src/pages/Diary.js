import React from 'react'
import MenuAppBar from '../Navbar'
export default function Diary() {
  return (
    <>
    <MenuAppBar></MenuAppBar>
    <div className='image-container'>
        <table>
        <tr><img src='./dairy/milk.jpg' alt='Milk' className="img-main"></img></tr>
        <tr><td>Natural milk</td></tr>
        <tr><td>
            <button onClick={alert('added to cart')}>Add to cart</button>
        </td></tr>
        </table>
        <table>
        <tr><img src='./dairy/butter.webp' alt='butter' className="img-main"></img></tr>
        <tr><td>Fresh Butter</td></tr>
        <tr><td><button>Add to cart</button></td></tr>
        </table>
        <table>
        <tr><img src='./dairy/ghee.jpg' alt='ghee' className="img-main"></img></tr>
        <tr><td>Ghee</td></tr>
        <tr><td><button>Add to cart</button></td></tr>
        </table>
        <table>
        <tr><img src='./dairy/paneer.jpg' alt='paneer' className="img-main"></img></tr>
        <tr><td>Paneer</td></tr>
        <tr><td><button>Add to cart</button></td></tr>
        </table>
        <table>
        <tr><img src='./dairy/yogurt.jpg' alt='yogurt' className="img-main"></img></tr>
        <tr><td>Yogurt</td></tr>
        <tr><td><button>Add to cart</button></td></tr>
        </table>
        <table>
        <tr><img src='./dairy/cheese.jpg' alt='cheese' className="img-main"></img></tr>
        <tr><td>Cheese</td></tr>
        <tr><td><button>Add to cart</button></td></tr>
        </table>
        <table>
        <tr><img src='./dairy/whippedcream.jpg' alt='whippedcream' className="img-main"></img></tr>
        <tr><td>Whipped cream</td></tr>
        <tr><td><button>Add to cart</button></td></tr>
        </table>
    </div>
    </>
  )
}
