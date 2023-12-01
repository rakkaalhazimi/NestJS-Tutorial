import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CrudService } from './crud.service';

@Controller("tutorial-crud")
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Get()
  getCat(): string {
    return this.crudService.getCat();
  }
  
  @Post()
  createCat(@Body('name') name: string): string {
    let isValid: boolean = this.crudService.createCat(name);
    if (!isValid) {
      return `Cat with name '${name}' already exists`
    }
    return 'Create cat success'
  }
  
  @Put()
  updateCat(
    @Body('name') name: string, 
    @Body('new_name') new_name: string
  ) {
    let isValid: boolean = this.crudService.updateCat(name, new_name);
    if (!isValid) {
      return `There is no cat with name ${name}`
    }
    return 'Cat has been updated'
  }
  
  @Delete()
  deleteCat(@Body('name') name: string) {
    let isValid: boolean = this.crudService.deleteCat(name);
    if (!isValid) {
      return `There is no cat with name ${name}`
    }
    return 'Cat has been deleted'
  }
}
