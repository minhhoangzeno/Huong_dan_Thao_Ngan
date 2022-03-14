import { privateDeleteApi, privatePostApi, publicGetApi } from "../apis/API";

export const getOrder = async () => {
    let response = await publicGetApi('/order')
    return response
};

// export const addOrder = async (data) => {
//     let response = await privatePostApi('/order/create', data)
//     return response
// };

export const editOrder = async (orderId, data) => {
    let response = await privatePostApi(`/order/edit/${orderId}`, data)
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
