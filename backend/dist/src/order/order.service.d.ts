import { Model } from 'mongoose';
import { OrderDto } from './dto/order.dto';
import { Order, OrderDocument } from './schemas/order.schemas';
export declare class OrderService {
    private orderModel;
    constructor(orderModel: Model<OrderDocument>);
    findAll(): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOrderByAmount(year: any): Promise<any[]>;
    findOrderByRevenue(year: any): Promise<any[]>;
    search(textSearch: any): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findByUser(userId: any): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createOrder(orderDto: OrderDto, userId: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    changeStatus(id: any, status: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    feedback(id: any, feedback: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateOrder(orderDto: OrderDto, orderId: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(orderId: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
