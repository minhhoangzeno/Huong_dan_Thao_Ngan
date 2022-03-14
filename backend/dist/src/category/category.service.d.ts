import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schemas';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    findAll(): Promise<Category[]>;
    create(title: string): Promise<Category>;
    update(title: string, id: any): Promise<Category>;
    delete(id: any): Promise<Category>;
}
