import { Controller, Get, Param } from '@nestjs/common';
import { CollectionService } from './collection.service';

@Controller('/collections')
export class CollectionController {
  constructor(private readonly service: CollectionService) {}

  @Get('/list/mine')
  async getMyCollections() {
    return await this.service.findMine(0);
  }

  @Get('/:id')
  async getCollection(@Param('id') collectionId: number) {
    return await this.service.listSounds(collectionId);
  }
}
