import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CartoonEntity } from "./cartoon.entity";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class PersonnageEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  role: string;

  @Field()
  @Column()
  short_description: string;

  @ManyToOne(() => CartoonEntity, (cartoon) => cartoon.personnages)
  cartoon: CartoonEntity;
}
