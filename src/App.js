import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Compoment/Home";
import About from "./Compoment/About";
import Products from "./Compoment/Products";
import Cart from "./Compoment/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Contatus from "./Compoment/Contatus";
import ProductDetails from "./Compoment/ProductDetails";
import Checkout from "./Compoment/Checkout";
import Review from "./Compoment/Review";
import Signup from "./Compoment/SignUp";
import SignIn from "./Compoment/SignIn";
import { useSelector } from "react-redux";
import AddProduct from "./Admin_Module/AddProduct";
import ManageProducts from "./Admin_Module/ManageProducts";

function App() {
  const data = useSelector((state) => {
    return state.users;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn")
  );

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
  }, [data.loginState]);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      {data.loginState ? (
        <>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/review" element={<Review />} />
          
        </>
      ) : null}
      <Route path="/addProduct" element={<AddProduct/>}/>
      <Route path="/manageProduct" element={<ManageProducts/>}/>
      <Route exact path="/content" element={<Contatus />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
function NotFound() {
  const navigate = useNavigate();
  const backFun = () => {
    navigate("/");
  };
  return (
    <>
      {" "}
      <center>
        <br/><br/><br/>
        <h1>404 - Page Not Found</h1>
        <h1>Go backe to website</h1>
        <button onClick={backFun} style={{backgroundColor:"#007bff",color:"#fff",fontWeight:"bold"}}>Go Back</button>
      </center>
    </>
  );
}
export default App;
