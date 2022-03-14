import { Model } from 'mongoose';
import { CategoryDocument } from 'src/category/schemas/category.schemas';
import { ProductDto } from './dto/product.dto';
import { Product, ProductDocument } from './schemas/product.schemas';
export declare class ProductService {
    private productModel;
    private categoryModel;
    constructor(productModel: Model<ProductDocument>, categoryModel: Model<CategoryDocument>);
    findAll(): Promise<Product[]>;
    create(productDto: ProductDto, photoURL: string): Promise<Product>;
    update(id: any, productDto: ProductDto, photoURL?: string): Promise<Product>;
    delete(id: any): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
