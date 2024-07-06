import { createParamDecorator, ExecutionContext } from '@nestjs/common';


export interface User {
  name: string,
  age: number
}

export const GetUser = createParamDecorator((_data, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  console.log('user from decorator');
  console.log(request.user);
  return request.user as User;
});