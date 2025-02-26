import React, { useState, useEffect } from "react";
import "./navstyle.css";
import { useNavigate } from "react-router-dom";

export default function MenuAppBar() {
  const navigate = useNavigate();
  const [btn, setBtn] = useState(false);

  const Clickable = () => {
    setBtn(!btn);
  };

  const handleClickOutside = (event) => {
    if (btn && !event.target.closest(".catstyle") && !event.target.closest(".category-btn")) {
      setBtn(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [btn]);

  return (
    <div className="navigationbar">
      <div className="nav_container">
        <div className="logoandname">
          <img src="logo icon.png"></img>
          <p><span className="name">Selvi's</span><span className="store">store</span> </p>
        </div>
        <div className="home">
          <p onClick={() => navigate("/")}>Home</p>

          <p className="category-btn" onClick={Clickable}>
            Shop by categories
          </p>

          {btn && (
            <div className="catstyle">
              <ul className="catlist">
                <li onClick={() => navigate("/Fruits")}>Fruits</li>
                <li onClick={() => navigate("/Vegetables")}>Vegetables</li>
                <li onClick={() => navigate("/Dairy")}>Dairy Products</li>
                <li onClick={() => navigate("/Beverages")}>Beverages</li>
                <li onClick={() => navigate("/Riceandgrains")}>Rice and Grains</li>
                <li onClick={() => navigate("/Oilandpulses")}>Oil and Pulses</li>
                <li onClick={() => navigate("/Floursandmasala")}>Flour and Masala</li>
                <li onClick={() => navigate("/Snackandchocolates")}>Snack and Chocolate</li>
                <li onClick={() => navigate("/Cakesandbiscuits")}>Cakes and Biscuits</li>
                <li onClick={() => navigate("/Beautyandhygiene")}>Beauty and Hygiene</li>
                <li onClick={() => navigate("/Cleaningandhousehold")}>Cleaning and Household</li>
              </ul>
            </div>
          )}

          {/* Other Navigation */}
          <p onClick={() => navigate("/Login")}>Login/Sign up</p>
          <p onClick={() => navigate("/cart")}>Cart</p>
        </div>
      </div>
    </div>
  );
}
