import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  // OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from '../tags/tags.entity';
import { Collection } from "../collection/collection.entity";

@Entity()
export class Sound {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  quote: string;

  @Column()
  path: string;

  @Column()
  plays: number;

  @CreateDateColumn({ type: 'timestamp' })
  date_added: Date;

  @ManyToOne(() => Collection, (collection) => collection.sounds)
  @JoinTable({ name: 'collection_sounds_sound' })
  collection: Collection;

  @ManyToMany(() => Tag)
  @JoinTable({ name: 'tag_sounds_sound' })
  tags: Tag[];
}
