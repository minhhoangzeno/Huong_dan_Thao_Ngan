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

    @Get('amount/:year')
    async getOrderByAmount(@Param('year') year) {
        return this.orderService.findOrderByAmount(year);
    }


    @Get('revenue/:year')
    async getOrderByRevenue(@Param('year') year) {
        return this.orderService.findOrderByRevenue(year);
    }

    @UseGuards(JwtAuthGuard)
    @Get('amount-user/:year')
    async getOrderByAmountUser(@Param('year') year, @Request() req) {
        return this.orderService.findOrderByAmountByUser(year, req.user._doc._id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('revenue-user/:year')
    async getOrderByRevenueUser(@Param('year') year, @Request() req) {
        return this.orderService.findOrderByRevenueByUser(year, req.user._doc._id);
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
    @Post('edit-user/:id')
    async editOrder(@Param('id') id, @Body() body: OrderDto) {
        return this.orderService.editOrder(id, body)
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
