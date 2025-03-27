import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CartoonEntity } from "./cartoon.entity";

@Entity()
export class PersonnageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  short_description: string;

  @ManyToOne(() => CartoonEntity, (cartoon) => cartoon.personnages)
  cartoon: CartoonEntity;
}
