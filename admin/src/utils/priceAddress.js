export const convertPriceAddress = (idSend, idRecieve,feeNM,feeBT,feeBN,feeTN) => {
    let price = 0;
    if (idSend < 39) {
        if (idRecieve < 39) {
            price = feeNM
        } else if (idRecieve < 53) {
            price = feeBT
        } else if (idRecieve > 52) {
            price = feeBN
        }
    } else if (idSend < 53) {
        if (idRecieve < 39) {
            price = feeBT
        } else if (idRecieve < 53) {
            price = feeNM
        } else if (idRecieve > 52) {
            price = feeTN
        }
    } else if (idSend > 52) {
        if (idRecieve < 39) {
            price = feeBT
        } else if (idRecieve < 53) {
            price = feeTN
        } else if (idRecieve > 52) {
            price = feeNM
        }
    }
    return price;
}

