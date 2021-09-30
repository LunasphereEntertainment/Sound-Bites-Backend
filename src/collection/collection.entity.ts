import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sound } from '../sounds/sound.entity';

@Entity()
export class Collection {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column('bigint')
  owner: number;

  @ManyToMany(() => Sound)
  @JoinTable()
  sounds: Sound[];
}
