import { Body, Controller, Get, Param, Post, UseGuards, Request, Delete } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Get()
    async findAll() {
        return this.orderService.findAll();
    }

    @Get('detail/:id')
    async findById(@Param('id') id) {
        return this.orderService.findById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() body, @Request() req) {
        return this.orderService.create(body.order, body.orders, req.user._doc._id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('edit/:id')
    async update(@Param('id') id, @Body() body) {
        return this.orderService.update(id, body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async delete(@Param('id') id) {
        return this.orderService.delete(id);
    }

}
