import { FeeService } from './fee.service';
export declare class FeeController {
    private feeService;
    constructor(feeService: FeeService);
    find(): Promise<(import("./schemas/fee.schemas").Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(body: any): Promise<import("./schemas/fee.schemas").Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(id: any, body: any): Promise<import("./schemas/fee.schemas").Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: any): Promise<import("./schemas/fee.schemas").Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
