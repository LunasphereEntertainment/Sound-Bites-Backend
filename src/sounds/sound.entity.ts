import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}
