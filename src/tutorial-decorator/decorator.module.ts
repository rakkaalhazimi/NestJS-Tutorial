import { Module } from '@nestjs/common';
import { DecoratorController } from './decorator.controller';
import { DecoratorService } from './decorator.service';

@Module({
  imports: [],
  controllers: [DecoratorController],
  providers: [DecoratorService],
})
export class DecoratorModule {}
