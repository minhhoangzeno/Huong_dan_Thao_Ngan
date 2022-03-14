import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/product/schemas/product.schemas';
export declare type CategoryDocument = Category & Document;
export declare class Category {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    products: Product[];
    createdAt: Date;
}
export declare const CategorySchema: mongoose.Schema<mongoose.Document<Category, any, any>, mongoose.Model<mongoose.Document<Category, any, any>, any, any, any>, any, any>;
