import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/cart.css";
import {
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from "../redux/user/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { priceFormat, productTotalPrice, totalPrice } from "../utils/helper";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.user.cart);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleCartDelete = (id) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(removeFromCart(id));
  };

  const handleIncrementProduct = (id) => {
    dispatch(incrementProduct(id));
  };

  const handleDecrementProduct = (id) => {
    dispatch(decrementProduct(id));
  };

  return (
    <div className="cart">
      <div className="cart__container">
        {cart.map((item) => (
          <div key={item.id} className="cart__card">
            <img
              src={item.thumbnail}
              alt="item thumbnail"
              className="item__image"
            />
            <div className="item__details">
              <div className="item__info">
                <span className="item__title">{item.title}</span>
                <div className="cart__price">
                  $ {priceFormat(productTotalPrice(item))}
                </div>
              </div>
              <div className="cart__btns">
                <button
                  className="item__count__btn"
                  onClick={() => handleIncrementProduct(item.id)}
                >
                  +
                </button>
                <div className="item__count">{item.count}</div>
                <button
                  className="item__count__btn"
                  onClick={() => handleDecrementProduct(item.id)}
                >
                  -
                </button>
              </div>
              <button
                className="item__delete"
                onClick={() => handleCartDelete(item.id)}
              >
                Delete{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 ? (
        <div className="cart__price__container">
          <div className="cart__price__title">Price Details</div>
          <div>
            <div>
              <div className="delivery__price">
                <div>Delivery Charges</div>
                <div>Free</div>
              </div>
              <div className="delivery__price">
                <div>Total Amount</div>
                <div className="cart__price">
                  $ {priceFormat(totalPrice(cart))}
                </div>
              </div>
              <button className="checkout__cart">Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty__cart">
          <FontAwesomeIcon
            icon={faGhost}
            size="sm"
            style={{
              paddingRight: "1rem",
            }}
          />
          Empty Cart
        </div>
      )}
    </div>
  );
}

export default Cart;
