import { createSlice } from '@reduxjs/toolkit';
import { deleteOrder, detailOrder, editOrder, getOrder } from '../services/order.service';

const initialState = {
    data: null,
    error: null
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.data = null
            state.error = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setData, setError } = orderSlice.actions;

// Define a thunk that dispatches those action creators
export const getOrderThunk = () => async (dispatch) => {

    try {
        const data = await getOrder();
        dispatch(setData(data))
        return data;
    } catch (err) {
        dispatch(setError(err))
    }
    //done
}

// export const addBlogThunk = (data) => async (dispatch) => {
//     try {
//         let response = await addBlog(data);
//         getBlogThunk();
//         return response;
//     } catch (error) {
//         console.log(error)
//     }
// }



export const editOrderThunk = (orderId, data) => async (dispatch) => {
    try {
        let response = await editOrder(orderId, data);
        getOrderThunk()
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const detailOrderThunk = (data) => async () => {
    try {
        let response = await detailOrder(data);
        return response
    } catch (error) {
        console.log(error)
    }
}
export const deleteOrderThunk = (data) => async () => {
    try {
        let response = await deleteOrder(data);
        return response
    } catch (error) {
        console.log(error)
    }
}
export default orderSlice.reducer