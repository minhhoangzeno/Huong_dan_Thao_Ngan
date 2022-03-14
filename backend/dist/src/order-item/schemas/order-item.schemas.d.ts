import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/product/schemas/product.schemas';
export declare type OrderItemDocument = OrderItem & Document;
export declare class OrderItem {
    id: mongoose.Schema.Types.ObjectId;
    product: Product;
    amount: Number;
}
export declare const OrderItemSchema: mongoose.Schema<mongoose.Document<OrderItem, any, any>, mongoose.Model<mongoose.Document<OrderItem, any, any>, any, any, any>, any, any>;
