import React from "react";
import { useSelector } from "react-redux";
import './Cart.style.css';
import { useDispatch } from "react-redux";
import  { remove }  from "../Store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) =>{
    dispatch(remove(productId))
  };

  return (
    <div className="product-wrapper">
      {products.map((product) => (
        <div className="product-item">
          <div className="img-container">
            <img src={product.image} alt="" />
          </div>
          <h3>{product.title}</h3>
          <h4>${product.price}</h4>
          <button onClick={()=>handleRemove(product.id)} className="del-btn">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
