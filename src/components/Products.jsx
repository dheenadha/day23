import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faRankingStar } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

function Products({ product, cart, setCart }) {
  // initializing total number of stars to view in review
  const totalStars = 5;
  // to change the state of button
  const [buttonState, setButtonState] = useState(true);

  // Function for clicking Add To Cart Button
  let addToCart = () => {
    setButtonState(false);
    setCart([...cart, product]);
  };
  // Function for Remove from Cart Button
  let removeFromCart = () => {
    setButtonState(true);
    setCart(
      cart.filter((cartProduct) => {
        return cartProduct.id !== product.id;
      })
    );
  };

  return (
    // Creating a product Card
    <div
      className="card col-lg-4"
      style={{ width: "18rem", backgroundColor: "rgb(183,183,183)" }}
    >
      {/* conditional rendering for giving new batch to new items */}
      {product.new ? (
        <div className="row justify-content-end mx-1 mt-1">
          <span className="badge text-bg-info col-2 ">New</span>
        </div>
      ) : (
        <div className="row justify-content-end mx-1 mt-4"></div>
      )}

      <div className="card-body">
        <img src={product.imageUrl} className="card-img-top" alt="..." />

        <h5 className="card-title text-center my-3 mt-4">
          {product.description}
        </h5>
        {/* creating star review */}
        <div className="container text-center">
          {product.starReview ? (
            <span>
              {[...new Array(totalStars)].map((arr, index) => {
                return product.starReview > index ? (
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                ) : (
                  <FontAwesomeIcon icon={faStar} />
                );
              })}
            </span>
          ) : (
            <div>
              {" "}
              <br />{" "}
            </div>
          )}
        </div>
        {/* creating offer price and original price */}
        {product.offerPrice ? (
          <h6 className="text-center text-black my-3 mt-2">
            <span className="strike"> Rs.{product.price}</span> Rs.
            {product.offerPrice}
          </h6>
        ) : (
          <h6 className="text-center text-black my-3 mt-2">
            Rs.{product.price}
          </h6>
        )}
        {/* creating buttons for add and remove from cart */}
        <div className=" text-center mt-4 my-3">
          {buttonState ? (
            <button
              className="btn btn-primary text-center"
              onClick={addToCart}
              value={buttonState}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-danger text-center"
              onClick={removeFromCart}
              value={buttonState}
            >
              Remove From Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
