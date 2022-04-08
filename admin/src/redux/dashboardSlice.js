import { createSlice } from '@reduxjs/toolkit';
import { dashboardDetailCountdown, dashboardOrder, dashboardOrderByAmount, dashboardOrderByAmountByUser, dashboardOrderByRevenue, dashboardOrderByRevenueByUser, dashboardOrderByUser, dashboardProduct, dashboardUser, dashboardVoteUser } from '../services/dashboard.service';

const initialState = {
    data: null,
    error: null
};

export const dashboardSlice = createSlice({
    name: 'dashboard',
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
export const { setData, setError } = dashboardSlice.actions;

// Define a thunk that dispatches those action creators
export const getDashboardUserThunk = () => async (dispatch) => {
    try {
        const data = await dashboardUser();
        return data;
    } catch (err) {
       console.log(err)
    }
    //done
}

export const getDashboardProductThunk = () => async (dispatch) => {
    try {
        const data = await dashboardProduct();
        return data;
    } catch (err) {
       console.log(err)
    }
    //done
}

export const getDashboardOrderThunk = () => async (dispatch) => {
    try {
        const data = await dashboardOrder();
        return data;
    } catch (err) {
       console.log(err)
    }
    //done
}


export const getDashboardByOrderThunk = (userId) => async (dispatch) => {
    try {
        const data = await dashboardOrderByUser(userId);
        return data;
    } catch (err) {
       console.log(err)
    }
    //done
}


export const getDashboardDetailCountdownThunk = (countdownId) => async (dispatch) => {
    try {
        const data = await dashboardDetailCountdown(countdownId);
        return data;
    } catch (err) {
       console.log(err)
    }
    //done
}


export const getDashboardVoteUserThunk = () => async (dispatch) => {
    try {
        const data = await dashboardVoteUser();
        return data;
    } catch (err) {
       console.log(err)
    }
    //done
}


export const getDashboardOrderByAmountThunk = (dto) => async (dispatch) => {
    try {
        const data = await dashboardOrderByAmount(dto);
        return data;
    } catch (err) {
       console.log(err)
    }
    //done
}



export const getDashboardOrderByRenevueThunk = (dto) => async (dispatch) => {
    try {
        const data = await dashboardOrderByRevenue(dto);
        return data;
    } catch (err) {
       console.log(err)
    }
    //done
}



export const getDashboardOrderByAmountByUserThunk = (dto) => async (dispatch) => {
    try {
        const data = await dashboardOrderByAmountByUser(dto);
        return data;
    } catch (err) {
       console.log(err)
    }
    //done
}



export const getDashboardOrderByRenevueByUserThunk = (dto) => async (dispatch) => {
    try {
        const data = await dashboardOrderByRevenueByUser(dto);
        return data;
    } catch (err) {
       console.log(err)
    }
    //done
}


export default dashboardSlice.reducer