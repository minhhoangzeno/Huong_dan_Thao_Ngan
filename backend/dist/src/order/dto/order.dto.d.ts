export declare class OrderDto {
    peopleSend: {
        fullName: String;
        phoneNumber: String;
        city: String;
        district: String;
        address: String;
    };
    peopleRecieve: {
        fullName: String;
        phoneNumber: String;
        city: String;
        district: String;
        address: String;
    };
    code: String;
    title: String;
    weight: String;
    priceNotIncludeService: Number;
    service: {
        priceService: Number;
        serviceName: String;
    };
    ecommerce?: Number;
    amount: Number;
    totalPrice: Number;
    note: String;
}
