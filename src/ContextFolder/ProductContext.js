// import React, { createContext, useState } from "react";
// import img1 from "../img/download (1).jpeg";
// import img2 from "../img/img2.jpeg";
// import img3 from "../img/img3.jpeg";
// import img4 from "../img/img4.jpeg";
// import img5 from "../img/img5.jpeg";

// const ProductContext = createContext();

// const productData = [
//   {
//     id: 1,
//     name: "Camera",
//     description: "Micuna Ovo Max Luxe High Chair With Seat Pad.",
//     price: 548.99,
//     originalPrice: 650.00,
//     image: img1,
//     stockStatus: "in-stock",
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Smart Watch",
//     description: "Beautiful white in color smart watch",
//     price: 548.99,
//     originalPrice: 650.00,
//     image: img2,
//     stockStatus: "in-stock",
//     discount: 20,
//   },
//   {
//     id: 3,
//     name: "Product 1",
//     description: "Product 1 description",
//     price: 548.99,
//     originalPrice: 650.00,
//     image: img3,
//     stockStatus: "out-of-stock",
//     discount: 20,
//   },
//   {
//     id: 4,
//     name: "Smart Rist Watch",
//     description: "Beautiful Rist Watch with amazing color",
//     price: 48.99,
//     originalPrice: 55.00,
//     image: img4,
//     stockStatus: "in-stock",
//     discount: 13,
//   },
//   {
//     id: 5,
//     name: "Smart Watch",
//     description: "Beautiful Black in color smart watch",
//     price: 48.99,
//     originalPrice: 60.00,
//     image: img5,
//     stockStatus: "in-stock",
//     discount: 25,
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     description: "Product 1 description",
//     price: 44.99,
//     originalPrice: 50.00,
//     image: img2,
//     stockStatus: "out-of-stock",
//     discount: 16,
//   },
// ];

// const ProductProvider = ({ children }) => {
//   return (
//     <ProductContext.Provider value={{ productData }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export { ProductContext, ProductProvider };

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productData, setproductData] = useState([]);

  const toBase64 = (arr) => {
    return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/routes/getProduct")
      .then((response) => {
        setproductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const processedProducts = productData.map((product) => ({
    ...product,
    imageUrl: product.image
      ? `data:image/png;base64,${toBase64(product.image.data)}`
      : null,
  }));

  return (
    <ProductContext.Provider value={{ productData: processedProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
