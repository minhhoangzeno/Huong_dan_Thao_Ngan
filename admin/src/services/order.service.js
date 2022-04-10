import { privateDeleteApi, privateGetApi, privatePostApi, publicGetApi } from "../apis/API";

export const getOrder = async (data) => {
    let response = await privatePostApi('/order/search', data)
    return response
};

export const getOrderByUser = async (userId) => {
    let response = await privateGetApi(`/order/user/${userId}`)
    return response
};

export const addOrder = async (data) => {
    let response = await privatePostApi('/order/create', data)
    return response
};

export const editOrder = async (orderId, data) => {
    let response = await privatePostApi(`/order/edit/${orderId}`, data)
    return response
};


export const editOrderUser = async (orderId, data) => {
    let response = await privatePostApi(`/order/edit-user/${orderId}`, data)
    return response
};

export const changeStatusOrder = async (orderId, data) => {
    let response = await privatePostApi(`/order/status/${orderId}`, data)
    return response
};


export const changeFeedbackOrder = async (orderId, data) => {
    let response = await privatePostApi(`/order/feedback/${orderId}`, data)
    return response
};

export const detailOrder = async (data) => {
    let response = await publicGetApi(`/order/detail/${data}`);
    return response;
}

export const deleteOrder = async (data) => {
    let response = await privateDeleteApi(`/order/delete/${data}`)
    return response
};
