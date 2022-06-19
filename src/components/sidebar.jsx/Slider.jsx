import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="menu">
      <h3 className="head">
        <Link className="map" to="/women">
          Women's Clothing
        </Link>
        <div className="hide">
          <div className="hide-1">
            <Link className="option0" to="/womendress">            
              Dresses
            </Link>            
            <Link className="option0" to="/outwear">            
              Outer Wear
            </Link>            
            <Link className="option0" to="/womenplussize">            
              Plus Size
            </Link>            
            <Link className="option0" to="/womentops">            
              Tops
            </Link>            
            <Link className="option0" to="/womentwopiece">            
              Two Piece Set
            </Link>            
            <Link className="option0" to="/womenswimwear">            
              Swimwear
            </Link>            
            <Link className="option0" to="/womentrending">            
              Trending
            </Link>            
          </div>            
          <div className="hide-2">
            <img src="https://www.namesnack.com/images/namesnack-womens-clothing-business-names-3000x3000-20200729.jpeg?crop=21:16,smart&width=420&dpr=2" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHFGFzFuuBijXoZMSR6CXAIrzVxzAxGbZ5w&usqp=CAU" alt="img2" />
          </div>
        </div>
      </h3>
      <h3 className="head">
        <Link className="map" to="/men">
          Men's Clothing
        </Link>
        <div className="hide">
          <h4> Tops </h4>
          <h4> Outdoors </h4>
          <h4> Swimwear </h4>
          <h4> Bottom </h4>
          <h4> OutWear </h4>
          <h4> Trending </h4>
        </div>
      </h3>
      <h3 className="head">
        <Link to="/" className="map" >
        Phones & Accessories
        </Link>
        <div className="hide">
          <h4> Smartphones </h4>
          <h4> Mobile Phones </h4>
          <h4> Power Banks & Stations </h4>
          <h4> Headphones & Speakers </h4>
          <h4> Hot Brands </h4>
        </div>
      </h3>
      <h3 className="head">
        <Link to="/" className="map">
        Tools, Industrial 
        </Link>
        <div className="hide">
          <h4> Professional Tools </h4>
          <h4> Tool Accessories </h4>
          <h4> Raw Materials </h4>
          <h4> Power Tools </h4>
          <h4> Machine Tools & Accessories </h4>
        </div>
      </h3>
      <h3 className="head">  
      <Link to="/" className="map">
        Computers & Office
      </Link>
        <div className="hide">
          <h4> Tablet PC </h4>
          <h4> Tablet Accessories </h4>
          <h4> Laptops Accessories </h4>
          <h4> Office Equipment </h4>
          <h4> Networking </h4>
        </div>
      </h3>
    </div>
  );
};

export default Slider;
