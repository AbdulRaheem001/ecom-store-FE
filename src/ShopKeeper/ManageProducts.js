import React, { useState, useEffect } from "react";
import axios from "axios";


function ManageProducts() {
  const [products, setProducts] = useState([]);
  function toBase64(arr) {
    // arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
  }
  

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/routes/getProduct")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const displayImages = () => {
    return products.map((product) => ({
      ...product,
      imageUrl: product.image
        ? `data:image/png;base64,${toBase64(product.image.data)}`
        : null,
    }));
  };

  return (
    <div>
      <h2>Manage Products</h2>
      {displayImages().map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Description: {product.description}</p>
          <p>Stock: {product.stock}</p>
          {product.imageUrl && (
            <img src={product.imageUrl} alt={product.name} />
          )}
        </div>
      ))}
    </div>
  );
}

export default ManageProducts;
