import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type FeeDocument = Fee & Document;
export declare class Fee {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    price: number;
    createdAt: Date;
}
export declare const FeeSchema: mongoose.Schema<Document<Fee, any, any>, mongoose.Model<Document<Fee, any, any>, any, any, any>, any, any>;
