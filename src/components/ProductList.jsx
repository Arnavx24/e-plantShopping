import React, { useState } from "react";

function ProductList() {
  const [cartCount, setCartCount] = useState(0);

  const plants = [
    { id: 1, name: "Snake Plant", price: 20, category: "Air Purifying" },
    { id: 2, name: "Aloe Vera", price: 15, category: "Air Purifying" },
    { id: 3, name: "Peace Lily", price: 25, category: "Air Purifying" },
    { id: 4, name: "Spider Plant", price: 18, category: "Air Purifying" },
    { id: 5, name: "Pothos", price: 16, category: "Air Purifying" },
    { id: 6, name: "Areca Palm", price: 30, category: "Air Purifying" },

    { id: 7, name: "Rose", price: 22, category: "Flowering" },
    { id: 8, name: "Orchid", price: 35, category: "Flowering" },
    { id: 9, name: "Jasmine", price: 28, category: "Flowering" },
    { id: 10, name: "Begonia", price: 18, category: "Flowering" },
    { id: 11, name: "Lavender", price: 20, category: "Flowering" },
    { id: 12, name: "Hibiscus", price: 24, category: "Flowering" },

    { id: 13, name: "Cactus", price: 14, category: "Succulents" },
    { id: 14, name: "Jade Plant", price: 17, category: "Succulents" },
    { id: 15, name: "Echeveria", price: 16, category: "Succulents" },
    { id: 16, name: "Haworthia", price: 15, category: "Succulents" },
    { id: 17, name: "Sedum", price: 13, category: "Succulents" },
    { id: 18, name: "Agave", price: 19, category: "Succulents" }
  ];

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          Home | Plants | Cart 🛒
          <span className="cart-count">
            {" "}
            {cartCount}
          </span>
        </div>
      </nav>

      <h1>Plant Listing</h1>

      {plants.map((plant) => (
        <div key={plant.id}>
          https://via.placeholder.com/100

          <h3>{plant.name}</h3>

          <p>Category: {plant.category}</p>

          <p>${plant.price}</p>

          <button
            onClick={() => setCartCount(cartCount + 1)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
