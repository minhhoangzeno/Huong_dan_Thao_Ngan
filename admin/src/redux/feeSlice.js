import { createSlice } from '@reduxjs/toolkit';
import { editFee, getFee } from '../services/fee.service';

const initialState = {
    data: null,
    error: null
};

export const feeSlice = createSlice({
    name: 'fee',
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
export const { setData, setError } = feeSlice.actions;

// Define a thunk that dispatches those action creators
export const getFeeThunk = () => async (dispatch) => {
    try {
        const data = await getFee();
        dispatch(setData(data))
        return data;
    } catch (err) {
        dispatch(setError(err))
    }
    //done
}

export const editFeeThunk = (feeId, data) => async (dispatch) => {
    try {
        let response = await editFee(feeId, data);
        getFeeThunk()
        return response;
    } catch (error) {
        console.log(error)
    }
}


export default feeSlice.reducer