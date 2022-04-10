import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getOrder(): Promise<(import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getOrderByAmount(year: any): Promise<any[]>;
    getOrderByRevenue(year: any): Promise<any[]>;
    getOrderByAmountUser(year: any, req: any): Promise<any[]>;
    getOrderByRevenueUser(year: any, req: any): Promise<any[]>;
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
    editOrder(id: any, body: OrderDto): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
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
