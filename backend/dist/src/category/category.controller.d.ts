import { CategoryService } from './category.service';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    findAll(): Promise<import("./schemas/category.schemas").Category[]>;
    create(body: any): Promise<import("./schemas/category.schemas").Category>;
    update(body: any, id: any): Promise<import("./schemas/category.schemas").Category>;
    delete(id: any): Promise<import("./schemas/category.schemas").Category>;
}
