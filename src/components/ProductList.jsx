import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 20, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Spider Plant", price: 18, image: "https://via.placeholder.com/100" },
      { id: 3, name: "Peace Lily", price: 25, image: "https://via.placeholder.com/100" },
      { id: 4, name: "Aloe Vera", price: 15, image: "https://via.placeholder.com/100" },
      { id: 5, name: "Pothos", price: 16, image: "https://via.placeholder.com/100" },
      { id: 6, name: "Areca Palm", price: 30, image: "https://via.placeholder.com/100" }
    ]
  },
  {
    category: "Flowering Plants",
    plants: [
      { id: 7, name: "Rose", price: 22, image: "https://via.placeholder.com/100" },
      { id: 8, name: "Orchid", price: 35, image: "https://via.placeholder.com/100" },
      { id: 9, name: "Jasmine", price: 26, image: "https://via.placeholder.com/100" },
      { id: 10, name: "Lavender", price: 20, image: "https://via.placeholder.com/100" },
      { id: 11, name: "Begonia", price: 18, image: "https://via.placeholder.com/100" },
      { id: 12, name: "Hibiscus", price: 24, image: "https://via.placeholder.com/100" }
    ]
  },
  {
    category: "Succulents",
    plants: [
      { id: 13, name: "Jade Plant", price: 17, image: "https://via.placeholder.com/100" },
      { id: 14, name: "Cactus", price: 12, image: "https://via.placeholder.com/100" },
      { id: 15, name: "Agave", price: 21, image: "https://via.placeholder.com/100" },
      { id: 16, name: "Echeveria", price: 19, image: "https://via.placeholder.com/100" },
      { id: 17, name: "Sedum", price: 13, image: "https://via.placeholder.com/100" },
      { id: 18, name: "Haworthia", price: 15, image: "https://via.placeholder.com/100" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedToCart({
      ...addedToCart,
      [plant.name]: true
    });
  };

  return (
    <div>
      <nav>
        /Home</a> |
        /plantsPlants</a> |
        /cartCart</a>
      </nav>

      {plantsArray.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>

          <div className="product-list">
            {category.plants.map((plant) => (
              <div className="product-card" key={plant.id}>
                {plant.image}

                <h3>{plant.name}</h3>

                <p>${plant.price}</p>

                <button
                  disabled={addedToCart[plant.name]}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name]
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
