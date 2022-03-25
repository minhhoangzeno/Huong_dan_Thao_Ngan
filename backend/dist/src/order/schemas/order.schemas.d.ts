import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';
export declare type OrderDocument = Order & Document;
export declare class Order {
    id: mongoose.Schema.Types.ObjectId;
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
    createdBy: User;
    code: String;
    feedback: String;
    title: String;
    weight: String;
    note: String;
    priceNotIncludeService: Number;
    service: {
        priceService: Number;
        serviceName: String;
    };
    ecommerce: Number;
    amount: Number;
    totalPrice: Number;
    status: String;
    createdAt: Date;
}
export declare const OrderSchema: mongoose.Schema<Document<Order, any, any>, mongoose.Model<Document<Order, any, any>, any, any, any>, any, any>;
