import { createSlice } from "@reduxjs/toolkit";

const ShopkeeperSlice = createSlice({
  name: "ShopKeeper",
  initialState: {
    Myproduct:[],
    Email: "",
    StoreName:"",
  },
  reducers: {
    setMyproduct(state,action){
        state.Myproduct=action.payload;
        console.log("My Products : ", state.Myproduct);
    },
    setShopKeeperEmail(state,action){
      state.Email=action.payload;
    },
    setStoreName(state,action){
        state.StoreName=action.payload;
    },
  },
});
export default ShopkeeperSlice;
export const { setShopKeeperEmail,setStoreName,setMyproduct } =
ShopkeeperSlice.actions;
