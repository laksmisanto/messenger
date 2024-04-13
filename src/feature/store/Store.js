import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/userSlice";
import activeSlice from "../slice/activeChatting";
const store = configureStore({
  reducer: {
    login: authSlice,
    active: activeSlice,
  },
});

export default store;
