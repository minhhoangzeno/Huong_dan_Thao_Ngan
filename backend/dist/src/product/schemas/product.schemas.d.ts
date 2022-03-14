import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Category } from 'src/category/schemas/category.schemas';
export declare type ProductDocument = Product & Document;
export declare class Product {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    price: string;
    content: string;
    note: string;
    animate: string;
    photoURL: string;
    category: Category;
    createdAt: Date;
}
export declare const ProductSchema: mongoose.Schema<Document<Product, any, any>, mongoose.Model<Document<Product, any, any>, any, any, any>, any, any>;
