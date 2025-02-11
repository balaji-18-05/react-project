import React from "react"
import MenuAppBar from "../Navbar"
export default function Fruits() {
  return (
    <>
    <MenuAppBar/>
    <div className="image-container">
    <table>
        <tr><img src='./fruits/orange.webp' alt='orange' className="img-main"></img></tr>
        <tr><td>Orange </td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    <table>
        <tr><img src='./fruits/apple.jpg' alt='apple' className="img-main"></img></tr>
        <tr><td>Apple</td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    <table>
        <tr><img src='./fruits/grapes.webp' alt='grapes' className="img-main"></img></tr>
        <tr><td> Red Grapes </td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    <table>
        <tr><img src='./fruits/banana.jpg' alt='banana' className="img-main"></img></tr>
        <tr><td>Banana </td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    <table>
        <tr><img src='./fruits/guava.webp' alt='guava' className="img-main"></img></tr>
        <tr><td>guava </td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    <table>
        <tr><img src='./fruits/kiwi.webp' alt='kiwi' className="img-main"></img></tr>
        <tr><td>kiwi </td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    <table>
        <tr><img src='./fruits/grapes2.jpeg' alt='green grapes' className="img-main"></img></tr>
        <tr><td>green grapes </td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    <table>
        <tr><img src='./fruits/lemon.webp' alt='lemon' className="img-main"></img></tr>
        <tr><td>lemon </td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    <table>
        <tr><img src='./fruits/mango.jpg' alt='Mango' className="img-main"></img></tr>
        <tr><td>Mango </td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    <table>
        <tr><img src='./fruits/strawberry.jpeg' alt='strawberry' className="img-main"></img></tr>
        <tr><td>strawberry </td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    <table>
        <tr><img src='./fruits/pomegrante.jpeg' alt='pomegrante' className="img-main"></img></tr>
        <tr><td>Pomegrante </td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    <table>
        <tr><img src='./fruits/watermelon.jpeg' alt='watermelon' className="img-main"></img></tr>
        <tr><td>watermelon </td></tr>
        <tr><td><button>Add to cart</button></td></tr>
    </table>
    </div>
    </>

  )
}
