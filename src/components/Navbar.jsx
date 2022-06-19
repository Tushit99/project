import React from "react";  
import "./Navbar.css"
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

import { logoutAPI } from "../store/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";


const Navbar = () => {     

  const dispatch = useDispatch();  
  const { isAuth } = useSelector((state) => state.auth);

  const handleLoginClick = () => {   
    dispatch(logoutAPI());
  };   


  return (  
    <div className="nav-color">   
      <div className="Navbar">   
        <Link to="/"><img
          src="https://imgaz.staticbg.com/banggood/os/202206/20220610044604_981.gif.webp"
          className="banggood"
          alt=""
        />
        </Link>

        <div className="nav-input">
          <input type="text" />
          <button>   
            <BiSearchAlt2 size="14px" />  
          </button>
          <div className="nav-bar">
            <h4>frky</h4>
            <h4>wltoys</h4>
            <h4>servo</h4>
            <h4>uslion</h4>
            <h4>gemfan</h4>
            <h4>solar panel</h4>
            <h4>3d printer</h4>
            <h4>laotie</h4>
          </div>
        </div>
        <div className="nav-exta">
          <h4>Ship to</h4>
          <h4>English(India)/INR </h4>
        </div>
        <div className="nav-dis">
          <BiUser size="45px" />
          <button onClick={handleLoginClick} className="nav-exta">
            <h4>{isAuth ? "" : "Hello"}</h4>
            <h4>{isAuth ? "Logout" : "Login"}</h4>
          </button>
        </div>
        <div className="yellow">
          <BsCartCheck size="40px" />
        </div>
      </div>
      {/* part 2 */}
      <div className="nav2">
        <div className="category">
          <FaBars />
          <h4>CATEGORIES</h4>
          <AiOutlineRight className="arr" />
        </div>  
        <div className="deal">
          <h4>FLASH DEALS</h4>
          <h4>CLEARANCE SALE</h4>
          <h4>TOP SELLERS</h4>
          <h4>LIVE</h4>  
        </div> 
      </div>
    </div>
  );
};

export default Navbar;
