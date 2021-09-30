import { Injectable } from '@nestjs/common';
import { MoreThan, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Sound } from "./sound.entity";

const pageSize = 50;

@Injectable()
export class SoundsService {
  constructor(@InjectRepository(Sound) private repo: Repository<Sound>) {}

  findRecent(): Promise<Sound[]> {
    return this.repo.find({ order: { date_added: 'DESC' } });
  }

  findSound(soundId: number): Promise<Sound> {
    return this.repo.findOne({ where: { id: soundId } });
  }
}
