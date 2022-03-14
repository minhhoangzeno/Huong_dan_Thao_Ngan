import { Model } from 'mongoose';
import { OrderItem, OrderItemDocument } from 'src/order-item/schemas/order-item.schemas';
import { OrderDto } from './dto/order.dto';
import { Order, OrderDocument } from './schemas/order.schemas';
export declare class OrderService {
    private orderModel;
    private orderItemModel;
    constructor(orderModel: Model<OrderDocument>, orderItemModel: Model<OrderItemDocument>);
    findAll(): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(id: any): Promise<{
        order: Order & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        orders: (OrderItem & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
    }>;
    create(orderDto: OrderDto, orders: any, user: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: any, orderDto: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
