import React from "react";
import { useState, useEffect } from "react";
import "./Products.style.css";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

const Products = () => {
  const disptach = useDispatch();
  const [produts, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    disptach(add(product));
  };

  return (
    <div className="productsWrapper">
      {produts.map((product) => (
        <div className="productItem" key={product.id}>
          <div className="img-container">
            <img src={product.image} alt="" />
          </div>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="add-btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
