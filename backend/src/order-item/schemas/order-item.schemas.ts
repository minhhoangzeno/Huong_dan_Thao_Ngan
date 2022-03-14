import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/product/schemas/product.schemas';
export type OrderItemDocument = OrderItem & Document;

@Schema()
export class OrderItem {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    product: Product;

    @Prop({ required: true })
    amount: Number;

}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);