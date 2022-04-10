import { createSlice } from '@reduxjs/toolkit';
import { addOrder, changeFeedbackOrder, changeStatusOrder, deleteOrder, detailOrder, editOrder, editOrderUser, getOrder, getOrderByUser } from '../services/order.service';

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
export const getOrderThunk = (textSearch) => async (dispatch) => {

    try {
        const data = await getOrder(textSearch);
        dispatch(setData(data))
        return data;
    } catch (err) {
        dispatch(setError(err))
    }
    //done
}


export const getOrderByUserThunk = (userId) => async (dispatch) => {
    try {
        const data = await getOrderByUser(userId);
        return data;
    } catch (err) {
        dispatch(setError(err))
    }
    //done
}

export const addOrderThunk = (data) => async (dispatch) => {
    try {
        let response = await addOrder(data);
        getOrderThunk();
        return response;
    } catch (error) {
        console.log(error)
    }
}



export const editOrderThunk = (orderId, data) => async (dispatch) => {
    try {
        let response = await editOrder(orderId, data);
        getOrderThunk()
        return response;
    } catch (error) {
        console.log(error)
    }
}


export const editOrderUserThunk = (orderId, data) => async (dispatch) => {
    try {
        let response = await editOrderUser(orderId, data);
        return response;
    } catch (error) {
        console.log(error)
    }
}


export const changeStatusOrderThunk = (orderId, data) => async (dispatch) => {
    try {
        let response = await changeStatusOrder(orderId, data);
        getOrderThunk()
        return response;
    } catch (error) {
        console.log(error)
    }
}


export const changeFeedbackOrderThunk = (orderId, data) => async (dispatch) => {
    try {
        let response = await changeFeedbackOrder(orderId, data);
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