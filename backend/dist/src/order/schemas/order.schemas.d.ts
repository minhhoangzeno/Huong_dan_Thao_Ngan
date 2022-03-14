import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { OrderItem } from 'src/order-item/schemas/order-item.schemas';
import { User } from 'src/user/schemas/user.schemas';
export declare type OrderDocument = Order & Document;
export declare class Order {
    id: mongoose.Schema.Types.ObjectId;
    fullName: string;
    phoneNumber: string;
    email: string;
    address: string;
    price: Number;
    note: string;
    status: string;
    user: User;
    orders: OrderItem[];
    createdAt: Date;
}
export declare const OrderSchema: mongoose.Schema<mongoose.Document<Order, any, any>, mongoose.Model<mongoose.Document<Order, any, any>, any, any, any>, any, any>;
