import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('coffee')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  type: string;
}
