import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeeController } from './fee.controller';
import { FeeService } from './fee.service';
import { Fee, FeeSchema } from './schemas/fee.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Fee.name, schema: FeeSchema }])],
  controllers: [FeeController],
  providers: [FeeService]
})
export class FeeModule {}
