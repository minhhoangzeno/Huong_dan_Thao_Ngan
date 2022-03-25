import { Body, Controller, Get, Post, UseGuards, Request, Param, Delete } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Get()
    async getOrder() {
        return this.orderService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('search')
    async searchOrder(@Body() body) {
        return this.orderService.search(body.textSearch);
    }

    @Get('user/:userId')
    async getOrderByUserId(@Param('userId') userId) {
        return this.orderService.findByUser(userId);
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createOrder(@Body() body: OrderDto, @Request() req) {
        return this.orderService.createOrder(body, req.user._doc._id)
    }

    @UseGuards(JwtAuthGuard)
    @Post('edit/:id')
    async edit(@Body() body: OrderDto, @Param('id') id) {
        return this.orderService.updateOrder(body, id)
    }

    @UseGuards(JwtAuthGuard)
    @Post('status/:id')
    async changeStatus(@Body() body, @Param('id') id) {
        return this.orderService.changeStatus(id, body.status)
    }

    @UseGuards(JwtAuthGuard)
    @Post('feedback/:id')
    async feedBack(@Body() body, @Param('id') id) {
        return this.orderService.feedback(id, body.feedback)
    }

    @Delete('delete/:id')
    async remove(@Param('id') id) {
        return this.orderService.delete(id);
    }

}
