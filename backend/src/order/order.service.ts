import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDto } from './dto/order.dto';
import { Order, OrderDocument } from './schemas/order.schemas';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>
    ) { }


    async findAll() {
        return this.orderModel.find();
    }

    async search(textSearch) {
        let regex = new RegExp(textSearch, "i");
        return await this.orderModel.find({ code: regex });
    }


    async findByUser(userId) {
        return this.orderModel.find({ createdBy: userId });
    }

    async createOrder(orderDto: OrderDto, userId) {
        let order = new this.orderModel({ ...orderDto });
        order.createdBy = userId;
        return order.save();
    }

    async changeStatus(id, status) {
        let order = await this.orderModel.findById(id.toString());
        order.status = status;
        return order.save();
    }

    async feedback(id, feedback) {

        let order = await this.orderModel.findById(id.toString());
        order.feedback = feedback;
        return order.save();
    }

    async updateOrder(orderDto: OrderDto, orderId) {
        let order = await this.orderModel.findById(orderId);
        order.peopleSend.fullName = orderDto.peopleSend.fullName;
        order.peopleSend.phoneNumber = orderDto.peopleSend.phoneNumber;
        order.peopleSend.city = orderDto.peopleSend.city;
        order.peopleSend.district = orderDto.peopleSend.district;
        order.peopleSend.address = orderDto.peopleSend.address;

        order.peopleRecieve.fullName = orderDto.peopleRecieve.fullName;
        order.peopleRecieve.phoneNumber = orderDto.peopleRecieve.phoneNumber;
        order.peopleRecieve.city = orderDto.peopleRecieve.city;
        order.peopleRecieve.district = orderDto.peopleRecieve.district;
        order.peopleRecieve.address = orderDto.peopleRecieve.address;

        order.code = orderDto.code;
        order.title = orderDto.title;
        order.weight = orderDto.weight;
        order.priceNotIncludeService = orderDto.priceNotIncludeService;
        order.service.priceService = orderDto.service.priceService;
        order.service.serviceName = orderDto.service.serviceName;

        order.ecommerce = orderDto.ecommerce;

        order.amount = orderDto.amount;
        order.totalPrice = orderDto.totalPrice;
        order.note = orderDto.note;

        return order.save();

    }
    async delete(orderId) {
        let order = await this.orderModel.findById(orderId);
        return order.remove();
    }

}
