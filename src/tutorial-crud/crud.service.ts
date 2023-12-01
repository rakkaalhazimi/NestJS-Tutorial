import { Injectable } from '@nestjs/common';

@Injectable()
export class CrudService {
  
  public readonly count: number = 0
  public readonly cats: string[] = [] 
  
  getCat(): string {
    if (this.cats.length == 0) {
      return `You don't have any cat, please create one.`
    }
    return `Your Cats are:\n- ${this.cats.join("\n- ")}`;
  }
  
  createCat(name: string): boolean {
    if (!this.cats.includes(name)) {
      this.cats.push(name);
      return true;
    }
    return false;
  }
  
  updateCat(name: string, new_name: string): boolean {
    let index = this.cats.indexOf(name);
    if (index != -1) {
      this.cats[index] = new_name;
      return true;
    }
    return false;
  }
  
  deleteCat(name: string): boolean {
    let index = this.cats.indexOf(name);
    if (index != -1) {
      this.cats.splice(index, 1);
      return true;
    }
    return false;
  }
}
