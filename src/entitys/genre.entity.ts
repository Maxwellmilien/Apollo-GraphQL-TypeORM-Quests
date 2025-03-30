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
export class GenreEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => CartoonEntity, (cartoon) => cartoon.genres)
  cartoon: CartoonEntity;
}
