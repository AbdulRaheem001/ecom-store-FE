import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../ContextFolder/ProductContext";
import "../Styles/ProductDetails.css"; // Import your custom CSS file for additional styling

function ProductDetails() {
  const { productData } = useContext(ProductContext);
  const { id } = useParams();
  const selectedProduct = productData.find((product) => product.id === parseInt(id));
 
  const navigate = useNavigate(); // Access the useNavigate hook

  // Function to handle the back action
  const handleBackButtonClick = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <>
 <button className="back-button" onClick={handleBackButtonClick}>
        Back
      </button>
    <div className="product-details-container">
      <div className="product-image">
        <div className="magnifier">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>
      </div>
      <div className="product-info">
          <h2>{selectedProduct.name}</h2>
          <p className="description">{selectedProduct.description}</p>
          <p className="price">Price: ${selectedProduct.price.toFixed(2)}</p>
          <p className="discount">Discount: {selectedProduct.discount}%</p>
          <p className="stock-status">Stock Status: {selectedProduct.stockStatus}</p>
          <button className="checkout-button">Check Out</button>
        </div>
    </div>
    </>
  );
}

export default ProductDetails;
