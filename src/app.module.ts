import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './tutorial-crud/crud.module';
import { DecoratorModule } from './tutorial-decorator/decorator.module';

@Module({
  imports: [CrudModule, DecoratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
