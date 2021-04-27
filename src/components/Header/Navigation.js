import classes from "./Navigation.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={classes["navigation"]}>
      <Link to="/">Home</Link>
      <Link to="/items">Items</Link>
    </div>
  );
};

export default Navigation;
