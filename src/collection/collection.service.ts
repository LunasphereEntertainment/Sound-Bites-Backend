import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Collection } from './collection.entity';
import { Repository } from 'typeorm';
import { Sound } from '../sounds/sound.entity';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection) private repo: Repository<Collection>,
  ) {}

  listSounds(collectionId: number): Promise<Collection> {
    return this.repo.findOne({
      relations: ['sounds'],
      where: { id: collectionId },
      // select: ['sounds'],
    });
  }

  findMine(userId: number): Promise<Collection[]> {
    return this.repo.find({
      select: ['id', 'owner', 'name'],
      where: { owner: userId },
    });
  }

  find(collectionId: number) {
    return this.repo.findOne({
      select: ['id', 'owner', 'name'],
      where: { id: collectionId },
    });
  }

  create(collection: Collection) {
    return this.repo.save(collection);
  }

  update(collection: Collection) {
    return this.repo.update({ id: collection.id }, collection);
  }

  remove(collectionId: number, ownerId: number) {
    return this.repo.delete({ id: collectionId, owner: ownerId });
  }
}
