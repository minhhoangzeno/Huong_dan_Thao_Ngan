import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/category/schemas/category.schemas';
import { ProductDto } from './dto/product.dto';
import { Product, ProductDocument } from './schemas/product.schemas';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>,
        @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
    ) { }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().populate("category", "title", "Category");
    }

    async create(productDto: ProductDto, photoURL: string): Promise<Product> {
        let product = new this.productModel({ ...productDto, photoURL });
        let category = await this.categoryModel.findById(product.category.toString());
        category.products.push(product._id);
        category.save();
        return product.save();
    }

    async update(id, productDto: ProductDto, photoURL?: string): Promise<Product> {
        let product = await this.productModel.findById(id.toString());
        if (photoURL) {
            product.title = productDto.title;
            product.price = productDto.price;
            product.content = productDto.content;
            product.note = productDto.note;
            product.category = productDto.category;
            product.animate = productDto.animate;
            product.photoURL = photoURL;
        } else {
            product.title = productDto.title;
            product.price = productDto.price;
            product.content = productDto.content;
            product.note = productDto.note;
            product.category = productDto.category;
            product.animate = productDto.animate;
        }
        return product.save();
    }
    async delete(id) {
        let product = await this.productModel.findById(id.toString());
        return product.remove();
    }


}
