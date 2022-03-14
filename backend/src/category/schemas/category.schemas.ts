import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/product/schemas/product.schemas';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
    products: Product[];

    @Prop({default: new Date()})
    createdAt: Date;

}

export const CategorySchema = SchemaFactory.createForClass(Category);