import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      {!showProducts ? (
        <div className="background-image">
          <div style={{ textAlign: "center", paddingTop: "200px" }}>
            <h1>Welcome to Paradise Nursery</h1>

            <button
              className="get-started-button"
              onClick={() => setShowProducts(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;
