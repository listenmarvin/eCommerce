import React from "react";

import { useNavigate } from "react-router-dom";

export default function Ordersucessfull() {
  const navigate = useNavigate();
  function handleProduct() {
    navigate("/ProductList");
  }
  return (
    <div className="box">
      <h2>Your Order placed sucessfully</h2>
      <div>
        <button onClick={handleProduct} className="btn btn-secondary">
          Go To Shoping page
        </button>
      </div>
    </div>
  );
}
