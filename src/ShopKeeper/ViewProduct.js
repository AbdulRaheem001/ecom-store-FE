import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ProductContext } from "../ContextFolder/ProductContext";
import { useSelector, useDispatch } from "react-redux";
import {setMyproduct} from "../Slice/ShopkeeperSlice";
function ViewProduct() {
  const dispatch =useDispatch();
  const userData = useSelector((state) => {
    return state.shopKeeper;
  });
    const { productData } = useContext(ProductContext);
    const product= productData.filter((item)=>item.storeName==userData.StoreName);
    //dispatch(setMyproduct(product));
  return (
    <>
            <div className="card-container" style={{ marginTop: "2%" }}>
        {product.map((product) => (
          <div key={product._id} className="card">
            
              <div className="image-container">
                <img
                  className="card-img-top"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <p
                  className={`overlay-text ${
                    product.stock === "in-stock"
                      ? "in-stock"
                      : "out-of-stock"
                  }`}
                >
                  {product.stock === "in-stock"
                    ? "IN STOCK"
                    : "OUT OF STOCK"}
                </p>
              </div>
              <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text" style={{ marginTop: "0%" }}>
                  {product.description}
                </p>
                <p className="crd-price" style={{ marginTop: "0%" }}>
                  ${product.discountPrice.toFixed(2)}{" "} {/* Use actualPrice */}
                  <del>${product.actualPrice.toFixed(2)}</del>
                </p>
                <p style={{ marginTop: "0%" }}>{product.discountPercentage}% off!</p>
              </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ViewProduct
