import React from "react";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";   
import { BsTwitter } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Foot">   
      <div>
        <div>
          <h3>Get to Know Us</h3>
          <h4>About Banggood.in</h4>
          <h4>Guarantees & Return Policy</h4>
          <h4>Contact Us</h4>
          <h4>Help Center</h4>
          <h4>Site Map</h4>
          <h4>Intellectual Property Claims</h4>
        </div>
        <div>
          <h3>Subscribe</h3>
          <h4>By subscribing you agree to receive email from us.</h4>
          <h4>Please read our Privacy Policy</h4>
        </div>
      </div>
      <div>
        <div>
          <h3>Payment & Shipping</h3>
          <h4>Payment Methods</h4>
          <h4>BGpay Instruction</h4>
          <h4>Shipping Guide</h4>
          <h4>Locations We Ship To</h4>
          <h4>Estimated Delivery Time</h4>
        </div>
        <div>
          <h3> Partnership Programs </h3>
          <h4>Drop shipping</h4>
          <h4>Review Club</h4>
          <h4>Affiliate Program</h4>
          <h4>Wholesale Program</h4>
          <h4>Fashion Blogger Program</h4>
        </div>
      </div>
      <div className="box">
        <h3>Download App</h3>
        <div className="display">
          <h1>
            <BsApple size="22px" />
          </h1>
          <h1>
            <DiAndroid size="22px" />
          </h1>
        </div>
        <h3>Follow Us</h3>
        <div className="display">
          <h1>
            <FaFacebookF size="22px" />
          </h1>
          <h1>
            <BsInstagram size="22px" />
          </h1>
          <h1>
            <BsTwitter size="22px" />
          </h1>
          <h1>
            <FaPinterest size="22px" />
          </h1>
          <h1>
            <FaTiktok size="22px" />
          </h1>
          <h1>
            <BsWhatsapp size="22px" />
          </h1>
        </div>
        <h4>© 2006-2022 BANGGOOD</h4>
        <div className="display to">
          <h4>TERMS</h4>
          <h4>PRIVACY</h4>
          <h4>SPECIALIZED</h4>
          <h4>AFFAIRS</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
