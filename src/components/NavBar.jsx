import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Products">Products</Link>
    </div>
  );
}
