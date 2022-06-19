import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const RequireAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  const from = {
    pathname: location.pathname,
  };

  if (isAuth) return children;
  return <Navigate to={"/login"} state={from} replace />;
};

export default RequireAuth;
