import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sound } from '../sounds/sound.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  tag: string;

  @ManyToMany(() => Sound)
  @JoinTable()
  sounds: Sound[];

  constructor(tag: string) {
    this.tag = tag;
  }
}
