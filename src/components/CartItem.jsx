import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          {item.image}

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>
            Total Cost: $
            {item.price * item.quantity}
          </p>

          <button
            onClick={() => handleIncrement(item)}
          >
            +
          </button>

          <span> {item.quantity} </span>

          <button
            onClick={() => handleDecrement(item)}
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <h2>Total Cart Amount: ${totalAmount}</h2>

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>

      <button
        onClick={() =>
          window.location.href = "/plants"
        }
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
