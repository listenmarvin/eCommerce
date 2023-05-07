import "../App.css";
function ProductList({ product, addToCart, addToWish }) {
  //This page displays the product items
  return (
    <div className="flex">
      {product.map((productItem, ProductIndex) => {
        return (
          <div style={{ width: "25%" }}>
            <div className="product_item">
              <img src={productItem.img} alt="image couldn't load" />
              <p className="title">
                <b>Title:</b>
                {productItem.title}
              </p>
              <p className="author">
                <b>Author:</b>
                {productItem.author}
              </p>
              <p className="price">
                <b>Price :</b> Rs.{productItem.price}./
              </p>
              <div className="button">
                <button
                  className="btn btn-primary btn"
                  onClick={() => addToCart(productItem)}
                >
                  Add to Cart{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => addToWish(productItem)}
                >
                  Add To wishList{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
