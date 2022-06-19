import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import Footer from "../footer/Footer" 
import Navbar from "../Navbar"  
import Footer2 from "../footer/Footer2" 

const Product = () => {
  const { id } = useParams();
  const { name } = useParams();
  const [product, setpro] = useState({});
  const [num, setnum] = useState(0);

  useEffect(() => {
    async function getData() {
      const data = await fetch(`http://localhost:8080/${name}/${id}`).then(
        (d) => d.json()
      );
      setpro(data);
    }
    getData();
  }, []);

  const setsub = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
      return num;
    }
  };

  const setadd = () => {
    if (num < 6) {
      setnum(num + 1);
    } else {
      return num;
    }
  };

  // for id : (Math.remdom())
  const r = Math.ceil(Math.random() * 1000000);
  
  return (
    <div className="fullpage"> 
    <Navbar />
    <div className="product">
      <div>
        <img src={product.img} className="productimg" width="220px" alt="" />
      </div>
      <div className="product-detail">
        <h3> {product.name} </h3>
        <h4>
          {" "}
          Brand: {product.brand} Question & Answers ID: {r}{" "}
        </h4>
        <h3>Rating : {product.review}</h3>
        <hr />
        <h2> ₹{product.pricein} </h2>
        <hr />
        <h5> Size(US): </h5>
        {/* ========== size====== */}
        <div className="radio-button">
          <label className="custom-radio">
            <input type="radio" name="rad" />
            <span className="radio-btn">
              {" "}
              <p>S</p>{" "}
            </span>
          </label>
          <label className="custom-radio">
            <input type="radio" name="rad" />
            <span className="radio-btn">
              {" "}
              <p>M</p>{" "}
            </span>
          </label>
          <label className="custom-radio">
            <input type="radio" name="rad" />
            <span className="radio-btn">
              {" "}
              <p>L</p>{" "}
            </span>
          </label>
          <label className="custom-radio">
            <input type="radio" name="rad" />
            <span className="radio-btn">
              {" "}
              <p>XL</p>{" "}
            </span>
          </label>
          <label className="custom-radio">
            <input type="radio" name="rad" />
            <span className="radio-btn">
              {" "}
              <p>2XL</p>{" "}
            </span>
          </label>
        </div>
        {/* ====== shiped ====== */}
        <h3>Ship From :</h3>
        <div className="ship">
          <h3> CN </h3>
        </div>
        {/* =========== Quantity======== */}
        <h5> QTY: </h5>
        <div className="quantity">
          <button onClick={setadd}> + </button>
          <h3> {num} </h3>
          <button onClick={setsub}> - </button>
        </div>
        <button className="addtocart"> Add to Cart </button>
        <h4> Secure Payment </h4>
        <h5> Multiple payment options </h5>
        <br />
        <h4> Customer Service Guarantee </h4>
        <div>
          <ul>
            <li> 7 Days DOA Guarantee </li>
            <li> 7 Days Missing/Wrong Items Guarantee </li>
            <li> Quality Guarantee </li>
            <li> No Reason Returns </li>
          </ul>
        </div>
      </div> 
    </div>
    <Footer2/> 
    <Footer />
    </div>
  );
};

export default Product;
