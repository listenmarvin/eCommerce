import React, { useRef } from "react";
import "../App.css";

import Checkout from "./Checkout";

export default function Localstorage() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  const handleSubmit = () => {
    if (
      email.current.value === "demo@gmail.com" &&
      password.current.value === "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
  };

  return (
    <div className="container">
      {getEmail && getPassword ? (
        <Checkout passLogin={1} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Please Login to order</h1>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Enter Your UserName : </label>
                <input type="text" ref={email} />
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Enter Your Password : </label>
                <input type="password" ref={password} />
              </div>
            </div>
          </div>
          <button className="btn btn-warning">Login</button>
        </form>
      )}
      <h6>userName: demo@gmail.com</h6>
      <h6>password: 12345</h6>
    </div>
  );
}
