import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './tutorial-crud/crud.module';
import { DecoratorModule } from './tutorial-decorator/decorator.module';
import { DependenciesModule } from './tutorial-dependencies/tutorial-dependencies.module';

@Module({
  imports: [CrudModule, DecoratorModule, DependenciesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
