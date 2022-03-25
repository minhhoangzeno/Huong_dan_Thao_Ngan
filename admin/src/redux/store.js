import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./progressSlice";
import blogReducer from './blogSlice';
import authReducer from './authSlice';
import videoReducer from './videoSlice';
import productReducer from './productSlice';
import dashboardReducer from './dashboardSlice';
import orderReducer from './orderSlice';
import userReducer from './userSlice';
import feedbackReducer from './feedbackSlice';
import feeReducer from './feeSlice';
//USE TOOLKIT
const rootReducer = {
    reducer: {
        progress: progressReducer,
        blog: blogReducer,
        auth: authReducer,
        video: videoReducer,
        product: productReducer,
        dashboard: dashboardReducer,
        order: orderReducer,
        user: userReducer,
        feedback: feedbackReducer,
        fee: feeReducer
    },
};

export const store = configureStore(rootReducer);
