export const convertPriceAddress = (idSend, idRecieve) => {
    // let priceBN = localStorage.getItem("priceBN");
    // let priceBT = localStorage.getItem("priceBT");
    // let priceNT = localStorage.getItem("priceNT");
    // let priceNM = localStorage.getItem("priceNM");
    let price = 0;
    if (idSend < 39) {
        if (idRecieve < 39) {
            // price = Number(priceBN);
            price = 30000
        } else if (idRecieve < 53) {
            // price = Number(priceBT)
            price = 40000
        } else if (idRecieve > 52) {
            // price = Number(priceBN)
            price = 50000
        }
    } else if (idSend < 53) {
        if (idRecieve < 39) {
            // price = Number(priceBT)
            price = 40000
        } else if (idRecieve < 53) {
            // price = Number(priceNM)
            price = 30000
        } else if (idRecieve > 52) {
            // price = Number(priceNT)
            price = 40000
        }
    } else if (idSend > 52) {
        if (idRecieve < 39) {
            // price = Number(priceBN)
            price = 50000
        } else if (idRecieve < 53) {
            // price = Number(priceNT)
            price = 40000
        } else if (idRecieve > 52) {
            // price = Number(priceNM)
            price = 30000
        }
    }
    return price;
}

