import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get()
    async findAll() {
        return this.categoryService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() body) {
        return this.categoryService.create(body.title);
    }

    @Post('edit/:id')
    async update(@Body() body, @Param('id') id) {
        return this.categoryService.update(body.title, id);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id) {
        return this.categoryService.delete(id);
    }


}
