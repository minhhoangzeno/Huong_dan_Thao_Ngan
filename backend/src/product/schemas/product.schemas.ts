import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Comment } from 'src/comment/schemas/comment.schemas';
import { Category } from 'src/category/schemas/category.schemas';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    price: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    note: string;

    @Prop({ required: true })
    animate: string;

    @Prop({ required: true })
    photoURL: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    category: Category;

    @Prop({ default: new Date() })
    createdAt: Date;

}

export const ProductSchema = SchemaFactory.createForClass(Product);