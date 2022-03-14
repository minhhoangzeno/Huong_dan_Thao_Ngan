import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./progressSlice";
import blogReducer from './blogSlice';
import authReducer from './authSlice';
import videoReducer from './videoSlice';
import productReducer from './productSlice';
import dashboardReducer from './dashboardSlice';
import categoryReducer from './categorySlice';
import orderReducer from './orderSlice';
//USE TOOLKIT
const rootReducer = {
    reducer: {
        progress: progressReducer,
        blog: blogReducer,
        auth: authReducer,
        video: videoReducer,
        product: productReducer,
        dashboard: dashboardReducer,
        category: categoryReducer,
        order: orderReducer

    },
};

export const store = configureStore(rootReducer);
