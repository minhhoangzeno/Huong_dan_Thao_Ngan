import { Model } from 'mongoose';
import { Fee, FeeDocument } from './schemas/fee.schemas';
export declare class FeeService {
    private feeModel;
    constructor(feeModel: Model<FeeDocument>);
    find(): Promise<(Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(title: string, price: number): Promise<Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(id: any, price: any): Promise<Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: any): Promise<Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
