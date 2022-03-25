import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type FeeDocument = Fee & Document;

@Schema()
export class Fee {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    price: number;

    @Prop()
    createdAt: Date;
}

export const FeeSchema = SchemaFactory.createForClass(Fee);