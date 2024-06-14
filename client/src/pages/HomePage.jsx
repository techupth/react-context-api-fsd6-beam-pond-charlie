import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import { useContext } from "react";

import { ProductsDataContext } from "../App.jsx";

function HomePage() {
  const navigate = useNavigate();
  const { products } = useContext(ProductsDataContext);
  return (
    <div>
      <div className="app-wrapper">
        <AppHeader />
      </div>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <div className="product-preview">
                <img
                  src={product.image}
                  alt={product.name + " product"}
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button
                    className="view-button"
                    onClick={() => navigate(`/product/view/${product.id}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
