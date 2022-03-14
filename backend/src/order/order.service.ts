import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderItem, OrderItemDocument } from 'src/order-item/schemas/order-item.schemas';
import { OrderDto } from './dto/order.dto';
import { Order, OrderDocument } from './schemas/order.schemas';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        @InjectModel(OrderItem.name) private orderItemModel: Model<OrderItemDocument>
    ) { }

    async findAll() {
        return this.orderModel.find();
    }

    async findById(id) {
        let order = await this.orderModel.findById(id);
        let orderItems = await this.orderItemModel.find({ '_id': { $in: [order.orders] } }).populate("product", "title price", "Product");
        return { order, orders: orderItems }
    }

    async create(orderDto: OrderDto, orders, user) {
        var orderSave = new this.orderModel({ ...orderDto, user })
        orders.forEach(order => {
            let orderItem = new this.orderItemModel({ product: order.product, amount: order.amount });
            orderSave.orders.push(orderItem._id);
            orderItem.save();
        })
        return orderSave.save();
    }

    async update(id, orderDto) {
        let order = await this.orderModel.findById(id.toString());
        order.fullName = orderDto.fullName;
        order.phoneNumber = orderDto.phoneNumber;
        order.email = orderDto.email;
        order.address = orderDto.address;
        order.note = orderDto.note;
        order.price = orderDto.price;
        order.status = orderDto.status;
        return order.save();
    }

    async delete(id) {
        let order = await this.orderModel.findById(id.toString());
        return order.remove();
    }
}
