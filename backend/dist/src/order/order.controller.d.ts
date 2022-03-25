/// <reference types="mongoose" />
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getOrder(): Promise<(import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    searchOrder(body: any): Promise<(import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getOrderByUserId(userId: any): Promise<(import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createOrder(body: OrderDto, req: any): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(body: OrderDto, id: any): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    changeStatus(body: any, id: any): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    feedBack(body: any, id: any): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: any): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
