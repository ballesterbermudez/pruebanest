import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Url } from 'url';

@Entity()
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  description: string;
}
