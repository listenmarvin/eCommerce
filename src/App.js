import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductListContainer from "./components/ProductListContainer";
import CartList from "./components/CartList";
import WishList from "./components/WishList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Localstorage from "./components/Localstorage";
import Ordersucessfull from "./components/Ordersucessfull";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    setCart([...cart, { ...data, Quantity: 1 }]);
  };

  const [wishcart, setWish] = useState([]);

  const addToWish = (wishdata) => {
    setWish([...wishcart, { ...wishdata }]);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProductList
                product={ProductListContainer}
                addToCart={addToCart}
                addToWish={addToWish}
              ></ProductList>
            }
          ></Route>
          <Route
            exact
            path="/ProductList"
            element={
              <ProductList
                product={ProductListContainer}
                addToCart={addToCart}
                addToWish={addToWish}
              ></ProductList>
            }
          ></Route>
          <Route
            exact
            path="/CartList"
            element={<CartList cart={cart} />}
          ></Route>
          <Route
            exact
            path="/WishList"
            element={<WishList wishcart={wishcart} addToCart={addToCart} />}
          ></Route>
          <Route exact path="/Checkout" element={<Checkout />}></Route>
          <Route exact path="/Localstorage" element={<Localstorage />}></Route>
          <Route
            exact
            path="/Ordersucessfull"
            element={<Ordersucessfull />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
