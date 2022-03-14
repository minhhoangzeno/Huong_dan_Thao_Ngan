import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schemas';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
    ) { }

    async findAll(): Promise<Category[]> {
        return this.categoryModel.find()
    }

    async create(title: string): Promise<Category> {
        let category = new this.categoryModel({ title});
        return category.save();
    }

    async update(title: string, id: any): Promise<Category> {
        let category = await this.categoryModel.findById(id.toString());
        category.title = title;
        return category.save();
    }

    async delete(id: any): Promise<Category> {
        let category = await this.categoryModel.findById(id.toString());
        return category.remove();
    }
}
