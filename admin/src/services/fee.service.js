import { privatePostApi, publicGetApi } from "../apis/API";

export const getFee = async () => {
    let response = await publicGetApi('/fee')
    return response
};

export const editFee = async (feeId, data) => {
    let response = await privatePostApi(`/fee/edit/${feeId}`, data)
    return response
};
