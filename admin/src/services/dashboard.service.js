import { privateGetApi, publicGetApi } from '../apis/API';

export const dashboardUser = async () => {
    let response = await publicGetApi('/user');
    return response;
};



export const dashboardOrderByAmount = async (dto) => {
    let response = await publicGetApi(`/order/amount/${dto}`);
    return response;
};


export const dashboardOrderByRevenue = async (dto) => {
    let response = await publicGetApi(`/order/revenue/${dto}`);
    return response;
};



export const dashboardOrderByAmountByUser = async (dto) => {
    let response = await privateGetApi(`/order/amount-user/${dto}`);
    return response;
};


export const dashboardOrderByRevenueByUser = async (dto) => {
    let response = await privateGetApi(`/order/revenue-user/${dto}`);
    return response;
};


export const dashboardProduct = async () => {
    let response = await publicGetApi('/product');
    return response;
};


export const dashboardDetailCountdown = async (countdownId) => {
    let response = await publicGetApi(`/countdown/detail/${countdownId}`);
    return response;
};


export const dashboardOrder = async () => {
    let response = await publicGetApi('/order');
    return response;
};



export const dashboardVoteUser = async () => {
    let response = await publicGetApi('/vote-user');
    return response;
};


export const dashboardOrderByUser = async (userId) => {
    let response = await privateGetApi(`/order/user/${userId}`)
    return response;
};