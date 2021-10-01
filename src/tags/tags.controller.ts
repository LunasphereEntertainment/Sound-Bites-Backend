import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('/tags')
export class TagsController {
  constructor(private service: TagsService) {}

  @Get('/list')
  async listTags() {
    return await this.service.listTags();
  }

  @Post('/new')
  async createTag(@Body('tag') tag: string) {
    return this.service.createTag(tag);
  }

  @Patch('/:id')
  async updateTag(@Param('id') tagId: number, @Body('tag') tag: string) {
    return this.service.updateTag(tagId, tag);
  }

  @Delete('/:id')
  async deleteTag(@Param('id') tagId: number) {
    return this.service.deleteTag(tagId);
  }
}
