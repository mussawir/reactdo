import React from "react";

import {  Outlet } from "react-router-dom";
import Login from './../Login/Login';
type Props = {};

const PrivateCopmonent = (props: Props) => {
  const auth = localStorage.getItem("user");
  return auth ? <Outlet /> : <Login/>;
};

export default PrivateCopmonent;
