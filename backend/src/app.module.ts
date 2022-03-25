import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { ProductModule } from './product/product.module';
import { ReplyModule } from './reply/reply.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { OrderModule } from './order/order.module';
import { FeedbackModule } from './feedback/feedback.module';
import { FeeModule } from './fee/fee.module';

@Module({
  imports: [UserModule,
    MongooseModule.forRoot('mongodb://localhost/thaongan'),
    AuthModule,
    BlogModule,
    VideoModule,
    CategoryModule,
    ProductModule,
    CommentModule,
    ReplyModule,
    OrderModule,
    FeedbackModule,
    FeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
