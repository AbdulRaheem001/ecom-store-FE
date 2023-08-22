import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice"

const userStor =configureStore({
    reducer:{
        users:userSlice.reducer
    },
});

export default userStor;