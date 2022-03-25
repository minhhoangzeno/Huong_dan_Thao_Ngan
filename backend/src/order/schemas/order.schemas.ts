import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({
        type: {
            fullName: { type: String }, phoneNumber: { type: String },
            city: { type: String },
            district: { type: String },
            address: { type: String },
        }
    })
    peopleSend: {
        fullName: String,
        phoneNumber: String,
        city: String,
        district: String,
        address: String
    }

    @Prop({
        type: {
            fullName: { type: String }, phoneNumber: { type: String },
            city: { type: String },
            district: { type: String },
            address: { type: String },
        }
    })
    peopleRecieve: {
        fullName: String,
        phoneNumber: String,
        city: String,
        district: String,
        address: String
    }

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    createdBy: User

    @Prop()
    code: String

    @Prop()
    feedback: String

    @Prop()
    title: String

    @Prop()
    weight: String

    @Prop()
    note: String

    @Prop()
    priceNotIncludeService: Number

    @Prop({
        type: {
            priceService: { type: Number }, serviceName: { type: String }
        }
    })
    service: {
        priceService: Number,
        serviceName: String
    }

    @Prop()
    ecommerce: Number

    @Prop()
    amount: Number

    @Prop()
    totalPrice: Number

    @Prop({ default: "Pending" })
    status: String

    @Prop({ default: new Date() })
    createdAt: Date;
}


export const OrderSchema = SchemaFactory.createForClass(Order);
