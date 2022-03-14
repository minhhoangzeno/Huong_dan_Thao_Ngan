import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { OrderItem } from 'src/order-item/schemas/order-item.schemas';
import { User } from 'src/user/schemas/user.schemas';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    price: Number;

    @Prop()
    note: string;

    @Prop({ default: 'Pending' })
    status: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem' }] })
    orders: OrderItem[];

    @Prop({ default: new Date() })
    createdAt: Date;

}

export const OrderSchema = SchemaFactory.createForClass(Order);