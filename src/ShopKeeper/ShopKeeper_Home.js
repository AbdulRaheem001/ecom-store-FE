import React, { useState, useEffect } from 'react';
import Shop_nave from "./ShopKeeper_NaveBar";
import axios from "axios";
import { Box } from '@mui/material';
import "../Styles/Products.css";
import { useSelector,useDispatch } from "react-redux";
import {setStoreName} from "../Slice/ShopkeeperSlice"
import ViewProduct from './ViewProduct';

function ShopKeeper_Home() {
  const [store, setStore] = useState(null);
  const dispatch = useDispatch();
  
  const userData = useSelector((state) => {
    return state.shopKeeper;
  });

  useEffect(() => {
    // Fetch store from your API and update the state
  
    axios.get(`http://localhost:5000/api/routes/getMyStore?Email=${userData.Email}`)
      .then(response => {
        setStore(response.data); // Assuming you only need one store per user
        console.log(response.data);
        dispatch(setStoreName(response.data.Store_name));
      })
      .catch(error => {
        console.error('Error fetching user store:', error);
      });
  }, [userData.Email]);

  const toBase64 = (arr) => {
    return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
  };

  if (!store) {
    return null; // Return loading or an empty state component if data is not available yet
  }

  const imageUrl = store.image
    ? `data:image/png;base64,${toBase64(store.image.data)}`
    : null;

  return (
    <>
      <Shop_nave />
      <Box className="hero-image" style={{ height: "500px" }}>
        <img
          className="hero-image__img"
          style={{ height: "500px" }}
          src={imageUrl}
          alt="Store Card"
        />
        <Box className="hero-image__overlay"></Box>
        <Box className="hero-content" style={{ color: "white" }}>
          <h1 className="hero-title">Welcome to {store.Store_name}</h1>
          <p className="hero-subtitle">Discover the Best Products for You</p>
        </Box>
      </Box>
      <ViewProduct/>
    </>
  );
}

export default ShopKeeper_Home;
