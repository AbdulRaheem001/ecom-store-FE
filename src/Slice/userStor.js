// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import userSlice from "./userSlice"; 
// const persistConfig = {
//   key: "root", 
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, userSlice.reducer); 
// export const userStore = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(userStore);



import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import ShopkeeperSlice from "./ShopkeeperSlice";
const userStor =configureStore({
    reducer:{
        users:userSlice.reducer,
        shopKeeper:ShopkeeperSlice.reducer
    },
});

export default userStor;