import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  findAll(): string {
    return 'find all method';
  }

  findOne(): string {
    return 'find one method';
  }

  create(): string {
    return 'create method';
  }

  update(): string {
    return 'update method';
  }

  remove(): string {
    return 'delete method';
  }
}
