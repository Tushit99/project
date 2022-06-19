import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginAPI } from "../store/auth/auth.actions";
import Footer from "./footer/Footer";
// import 
import Footer2 from "./footer/Footer2";
import "./login.css"
import Navbar from "./Navbar";


const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });  

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAPI(loginCreds));
  };



  useEffect(() => {
    if (isAuth) {
      navigate(location.state.pathname || "/", { replace: true });
    }
  }, [navigate, isAuth]);   
    
  return (
    <div className="login"> 
      <Navbar /> 
      <h1> LogIn </h1> 
      <form
        onSubmit={handleSubmit} 
        className="log-form" 
      >
        <input
          name="email"
          type="email" 
          className="loginp"
          placeholder="Enter Email"
          value={loginCreds.email}
          onChange={hanldeChange}
        />
        <input
          name="password"
          type="password"
          className="loginp"
          placeholder="Enter Password..."
          value={loginCreds.password}
          onChange={hanldeChange}
        />
        
        <button className="logbut"  type="submit">
          Login
        </button>
      </form> 
      <h3 className="signupsec"> Signin for free <Link to="/signin"> <button className="signlink">Signin</button></Link> </h3>
      <Footer2/> 
      <Footer/> 
    </div>
  );
};

export default Login;
