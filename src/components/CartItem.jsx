import React, { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const unitPrice = 20;

  const totalCost = quantity * unitPrice;

  return (
    <div>
      <h1>Shopping Cart</h1>

      https://via.placeholder.com/100

      <h3>Snake Plant</h3>

      <p>Unit Price: ${unitPrice}</p>

      <p>Total Cost: ${totalCost}</p>

      <button onClick={() => setQuantity(quantity + 1)}>
        Increase Quantity
      </button>

      <button
        onClick={() =>
          quantity > 1 &&
          setQuantity(quantity - 1)
        }
      >
        Decrease Quantity
      </button>

      <button>
        Delete Item
      </button>

      <h2>Total Cart Amount: ${totalCost}</h2>

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>

      <button>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
