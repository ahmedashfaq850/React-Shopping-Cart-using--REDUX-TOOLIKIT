import React from "react";
import { Link } from "react-router-dom";
import './Navbar.style.css';
import { useSelector } from "react-redux";

const Navbar = () => {

  const items = useSelector((state)=> state.cart)

  return (
    <div className="navBar">
      <span className="logo">Redux Store</span>
      <div>
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/cart">Cart</Link>
      </div>
      <span className="cartCount">Cart item: {items.length}</span>
    </div>
  );
};

export default Navbar;
