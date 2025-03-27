import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CartoonEntity } from "./cartoon.entity";

@Entity()
export class GenreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => CartoonEntity, (cartoon) => cartoon.genres)
  cartoon: CartoonEntity;
}
