import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

import { UserDataContext } from "../App";
import { ProductsDataContext } from "../App.jsx";

function ViewProductPage() {
  const { level, avatar, username } = useContext(UserDataContext);
  const { products } = useContext(ProductsDataContext);
  const params = useParams();
  const product = products.find((item) => item.id == params.id);
  const navigate = useNavigate();
  return (
    <div>
      <div className="view-product-header">
        <h1>View Product Page</h1>
        <img src={avatar} alt={username + " pic"} width="50" height="50" />
      </div>
      <div className="view-product-container">
        <div className="product-preview">
          <img
            src={product.image}
            alt={product.name + " product"}
            width="250"
            height="250"
          />
        </div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>

      <div className="product-promotion-box">
        <h2>คุณคือสมาชิกในระดับ {level} ดังนั้นคุณได้สิทธิพิเศษลด 50%</h2>
        <button onClick={() => alert("🥳🥳🥳🥳")}>กดรับสิทธิ</button>
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
