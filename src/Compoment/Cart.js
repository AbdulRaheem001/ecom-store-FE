import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeItem, setQuantity } from "../Slice/userSlice";
import "../Styles/Cart.css";

const Cart = () => {

  const navigate = useNavigate();
  const dispatchRed = useDispatch();
 const data=useSelector((state)=>{
  return state.users;
 })
  const handleRemoveItem = (item) => {
    dispatchRed(removeItem(item));
  };


  const calculatesubTotalBill = () => {
    let total = data.items.reduce(
      (subtotal, item) => subtotal + item.discountPrice * item.quantity,
      0
    );
    return total;
  };

  const getTotalItems = () => {
    const totalItems = data.items.reduce((total, item) => total + item.quantity, 0);
    return totalItems;
  };
  
  const handleQuantityChange = (e, item) => {
    const newQuantity = parseInt(e.target.value, 10); // Parse the input value to an integer
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      // Update the quantity of the item in the Redux store
      dispatchRed(setQuantity({ id: item.id, quantity: newQuantity }));
    }
  };
  const handleBackButtonClick = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div><button className="back-button" onClick={handleBackButtonClick}>
    Back
  </button>
      <h2 className="cart-heading">Shopping Cart</h2>
      {data.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-table-container">
          <table className="cart-table">
            <thead>
              <tr style={{backgroundColor:"lightgray"}}>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="item-image"
                    />
                    {item.name}
                  </td>
                  <td>${item.discountPrice}</td>
                  <td>  <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e, item)}
              /></td>
                  <td>${item.discountPrice}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(item)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <center>
            <table className="total-table">
              <tbody>
                <tr>
                  <td>Total Items:</td>
                  <td>{getTotalItems()}</td>
                </tr>
                <tr>
                  <td>Subtotal:</td>
                  <td>${calculatesubTotalBill()}</td>
                </tr>
              </tbody>
            </table>
            </center>
           <center>
            <button className="ConfirmOrder" v onClick={()=>navigate("/checkout")}>Check Out</button></center>
          </div>
        </div>

      )}
    
    </div>
    //onClick={() => navigate("/cart")
  );
};

export default Cart;
