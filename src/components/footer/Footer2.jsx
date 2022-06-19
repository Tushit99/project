import React from "react";
import { FaAward } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { BsHeadset } from "react-icons/bs";
import "./Footer.css";

const Footer2 = () => {
  return (
    <div>
      <div className="fot">
        <h5>Popular Keywords</h5>
        <h5>Sleeping Bags, Hiking Shoes, Binoculars</h5>
      </div>
      <hr />
      <div className="footer">
        <h1>
          <FaAward size="60px" color="#747474" />
          <h5>Quality and Saving </h5>
          <h5 className="opt">
            {" "}
            Comprehensive quality control and affordable prices
          </h5>
        </h1>
        <h1>
          <FaWarehouse size="60px" color="#747474" />
          <h5> Global Warehouse </h5>
          <h5 className="opt"> 37 overseas warehouses </h5>
        </h1>
        <h1>
          <TbTruckDelivery size="60px" color="#747474" />
          <h5> Fast and convenient logistics </h5>
          <h5 className="opt"> Fast and convenient door to door delivery </h5>
        </h1>
        <h1>
          <AiOutlineDollar size="60px" color="#747474" />
          <h5> Payment Security </h5>
          <h5 className="opt">
            {" "}
            More than 40 different secure payment methods{" "}
          </h5>
        </h1>
        <h1>
          <BsHeadset size="60px" color="#747474" />
          <h5> Professional service and product warranty </h5>
          <h5 className="opt"> 24/7 Customer Service </h5>
        </h1>
      </div>
    </div>
  );
};

export default Footer2;
