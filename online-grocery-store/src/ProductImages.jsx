import React from 'react'
import { Link } from 'react-router-dom';


export  function Images() {
  return (<>
  <center>
    <div class='image-container-main'>
        <table>
            <tr>
                <nav>
                    <Link to="/Fruits"><img src='fruits.jpeg' alt='fresh products' /></Link>
                </nav>
            </tr>
            <tr><td>Fruits</td></tr>
        </table>
        <table>
            <tr>
            <nav>
                <Link to="/dairy"><img src='diaryimg.jpg' alt='diary products'/></Link>
            </nav>
            </tr>
            <tr><td>Dairy</td></tr>
            <tr><td>Products</td></tr>
        </table>
        <table>
            <tr><img src='grains.jpg' alt='food grains'/></tr>
            <tr><td>Rice & Grains</td></tr>
        </table>
        <table>
            <tr><img src='vegetables.jpg' alt='vegeies'/></tr>
            <tr><td>Vegetables</td></tr>
        </table>
        <table>
            <tr><img src='oilandmasala.jpeg' alt='oil'/></tr>
            <tr><td>Oil & masala</td></tr>
        </table>
        <table>
            <tr><img src='beautyandhygiene.jpeg' alt='beautyandhygiene'/></tr>
            <tr><td>Beauty & </td></tr>
            <tr><td>Hygiene</td></tr>
        </table>
        <table>
            <tr><img src='household.jpeg' alt='household'/></tr>
            <tr><td>cleaning & </td></tr>
            <tr><td>Household </td></tr>
        </table>
        <table>
            <tr><img src='softdrinks.jpg' alt='softdrinks'/></tr>
            <tr><td>Beverages</td></tr>
        </table>
        <table>
            <tr><img src='cakesandbiscits.jpg' alt='cakesandbiscits'/></tr>
            <tr><td>Cakes & Biscits</td></tr>
        </table>
        <table>
            <tr><img src='snack.jpeg' alt='snack'/></tr>
            <tr><td>Snacks &</td></tr>
            <tr><td>Chocolate </td></tr>
        </table>
    </div>
    </center>
    <h1>Today's deals :</h1>
    <div className='image-container'>
    <table>
        <tr><img src='./fruits/apple.jpg' alt='apple' className="img-main"></img></tr>
        <tr><td>Apple</td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    </div>
    </>
  )
}
