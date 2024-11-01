import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './tutorial-crud/crud.module';
import { DecoratorModule } from './tutorial-decorator/decorator.module';
import { DependenciesModule } from './tutorial-dependencies/tutorial-dependencies.module';
<<<<<<< HEAD
import { TestModule } from './tutorial-test/test.module';

@Module({
  imports: [CrudModule, DecoratorModule, DependenciesModule, TestModule],
=======

@Module({
  imports: [CrudModule, DecoratorModule, DependenciesModule],
>>>>>>> f0b906e100a903270574720963056e66c9634cd1
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
