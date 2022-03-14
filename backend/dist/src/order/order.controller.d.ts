import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    findAll(): Promise<(import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(id: any): Promise<{
        order: import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        orders: (import("../order-item/schemas/order-item.schemas").OrderItem & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
    }>;
    create(body: any, req: any): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: any, body: any): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: any): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
