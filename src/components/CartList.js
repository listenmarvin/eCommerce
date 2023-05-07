import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CartList({ cart }) {
  const [CART, setCart] = useState(cart);

  const navigate = useNavigate();
  //Navigates to Localstorage.js
  function handleClick() {
    navigate("/Localstorage");
  }
  //Navigates to checkout.js
  function handleGuest() {
    navigate("/Checkout");
  }
//This put the product into cartList
  return (
    <div className="container">
      {CART?.map((cartItem, cartIdex) => {
        return (
          <div>
            <div className="product_item">
              <div>
                <img src={cartItem.img} alt="product Image" />
              </div>
              <div>
                <span>
                  <b>Title :</b>
                  {cartItem.title}
                </span>
                form in react
              </div>
              <div>
                <span>
                  <b>Author:</b>
                  {cartItem.author}
                </span>
              </div>
              <div>
                {/* This increase and decreses the quantity */}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartIdex === index
                        ? {
                            ...item,
                            Quantity: item.Quantity > 0 ? item.Quantity - 1 : 0,
                          }
                        : item;
                    });
                    setCart(_CART);
                  }}
                >
                  {" "}
                  -{" "}
                </button>
                <span>{cartItem.Quantity}</span>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartIdex === index
                        ? { ...item, Quantity: item.Quantity + 1 }
                        : item;
                    });
                    setCart(_CART);
                  }}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* calculate the total value of the item */}
      <p className="product_item">
        {" "}
        <b>Total :</b>
        {CART.map((item) => item.price * item.Quantity).reduce(
          (total, value) => total + value,
          0
        )}
        <div className="button">
          <button className="btn btn-primary" onClick={() => handleClick()}>
            CheckOut
          </button>
          <button className="btn btn-secondary" onClick={() => handleGuest()}>
            CheckOut As A Guest
          </button>
        </div>
      </p>
    </div>
  );
}
export default CartList;
