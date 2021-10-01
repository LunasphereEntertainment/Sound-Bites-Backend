import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tags.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tag) private repo: Repository<Tag>) {}

  listTags(): Promise<Tag[]> {
    return this.repo.find({ take: 100 });
  }

  searchTag(term: string): Promise<Tag[]> {
    return this.repo.find({ where: { tag: term } });
  }

  createTag(tag: string) {
    return this.repo.create(new Tag(tag));
  }

  updateTag(tagId: number, tag: string) {
    return this.repo.update({ id: tagId }, { tag });
  }

  deleteTag(tagId: number) {
    return this.repo.delete({ id: tagId });
  }
}
