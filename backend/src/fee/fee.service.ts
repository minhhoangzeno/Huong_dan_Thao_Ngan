import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fee, FeeDocument } from './schemas/fee.schemas';

@Injectable()
export class FeeService {
    constructor(@InjectModel(Fee.name) private feeModel: Model<FeeDocument>) { }

    async find() {
        return this.feeModel.find();
    }

    async create(title: string, price: number) {
        let fee = new this.feeModel({ title, price });
        return fee.save();
    }

    async edit(id, price) {
        let fee = await this.feeModel.findById(id.toString());
        fee.price = price;
        return fee.save();
    }

    async delete(id) {
        let fee = await this.feeModel.findById(id.toString());
        return fee.remove();
    }
}
