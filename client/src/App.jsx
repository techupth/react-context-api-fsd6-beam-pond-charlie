import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

import products from "./data/products.js";

export const UserDataContext = createContext();
export const ProductsDataContext = createContext();

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };
  const productData = {
    products,
  };

  return (
    <div className="App">
      <ProductsDataContext.Provider value={productData}>
        <UserDataContext.Provider value={userData}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/view/:id" element={<ViewProductPage />} />
            </Routes>
          </Router>
        </UserDataContext.Provider>
      </ProductsDataContext.Provider>
    </div>
  );
}

export default App;
