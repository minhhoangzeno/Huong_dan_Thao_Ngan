import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FeeService } from './fee.service';

@Controller('fee')
export class FeeController {
    constructor(private feeService: FeeService) { }

    @Get()
    async find() {
        return this.feeService.find();
    }

    @Post('create')
    async create(@Body() body) {
        return this.feeService.create(body.title, body.price);
    }

    @Post('edit/:id')
    async edit(@Param('id') id, @Body() body) {
        return this.feeService.edit(id, body.price);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id) {
        return this.feeService.delete(id)
    }

}
