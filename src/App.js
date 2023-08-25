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
import AddProduct from "./ShopKeeper/AddProduct";
import ManageProducts from "./ShopKeeper/ManageProducts";
import RegisterStor from "./ShopKeeper/RegisterStor";
import RegisterMassege from "./ShopKeeper/RegisterMassege";
import ManagerStore from "./Admin_Module/ManagerStore";
import ShopKeeper_NaveBar from "./ShopKeeper/ShopKeeper_NaveBar";
import ShopKeeper_Home from "./ShopKeeper/ShopKeeper_Home";
import ViewProduct from "./ShopKeeper/ViewProduct";
function App() {
  const data = useSelector((state) => {
    return state.users;
  });
  
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn")
  );
  const [userType, setuserType] = useState(sessionStorage.getItem("userType"));
  const [Email, setEmail] = useState(sessionStorage.getItem("Email"));
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
    setuserType(sessionStorage.getItem("userType"));
    setEmail(sessionStorage.getItem("Email"));
    console.log(isLoggedIn);
  }, [data.loginState]);
  // const loginState = useSelector((state) => state.users.loginState);
  // const userType = useSelector((state) => state.users.userType);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      {data.loginState && data.userType == "customer" ? (
        <>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/review" element={<Review />} />
        </>
      ) : null}
      {data.loginState && data.userType === "shopKeeper" ? (
        <>
        <Route path="/ShopKeeper_NaveBar" element={<ShopKeeper_NaveBar />} />
          {!data.StoreExist ? (
            <Route path="/registerStore" element={<RegisterStor />} />
          ) : !data.Status ? (
            <Route path="/registerMassege" element={<RegisterMassege />} />
          ) : (
            <>
            <Route path="/ShopKeeper_Home" element={<ShopKeeper_Home/>}/>
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/manageProduct" element={<ManageProducts />} />
              <Route path="/viewProduct" element={<ViewProduct />} />
            </>
          )}
        </>
      ) : null}
      {data.loginState && data.userType == "manager" ? (
        <>
         <Route path="/manageStore" element={<ManagerStore/>}/>
        </>
      ) : null}
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
        <br />
        <br />
        <br />
        <h1>404 - Page Not Found</h1>
        <h1>Go backe to website</h1>
        <button
          onClick={backFun}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Go Back
        </button>
      </center>
    </>
  );
}
export default App;
