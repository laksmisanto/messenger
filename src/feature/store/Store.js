import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/userSlice";
const store = configureStore({
  reducer: {
    login: authSlice,
  },
});

export default store;
