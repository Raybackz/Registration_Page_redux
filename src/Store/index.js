import { configureStore } from "@reduxjs/toolkit";
import Userslices from "./Slices/Userslices";

const store = configureStore({
    reducer: {
        user: Userslices,
    }
})

export default store