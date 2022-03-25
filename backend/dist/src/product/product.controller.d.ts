/// <reference types="multer" />
/// <reference types="mongoose" />
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    findAll(): Promise<import("./schemas/product.schemas").Product[]>;
    create(file: Express.Multer.File, body: ProductDto): Promise<import("./schemas/product.schemas").Product>;
    update(id: any, file: Express.Multer.File, body: ProductDto): Promise<import("./schemas/product.schemas").Product>;
    delete(id: any): Promise<import("./schemas/product.schemas").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
