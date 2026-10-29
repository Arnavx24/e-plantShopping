import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <>
      {!showProductList ? (
        <div className="app-container">
          <div className="background-image">
            <div style={{ textAlign: "center", paddingTop: "200px" }}>
              <h1>Welcome to Paradise Nursery</h1>

              <button
                className="get-started-button"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;
