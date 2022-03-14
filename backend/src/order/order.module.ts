import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderItem, OrderItemSchema } from 'src/order-item/schemas/order-item.schemas';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order, OrderSchema } from './schemas/order.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  MongooseModule.forFeature([{ name: OrderItem.name, schema: OrderItemSchema }])
],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
