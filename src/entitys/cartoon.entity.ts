import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GenreEntity } from "./genre.entity";
import { PersonnageEntity } from "./personnage.entity";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class CartoonEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  nb_of_episodes: number;

  @Field()
  @Column()
  nb_of_seasons: number;

  @Field()
  @Column()
  realisator: string;

  @Field()
  @Column()
  author: string;

  @Field()
  @Column()
  ft_diffusion: string;

  @Field(() => [GenreEntity])
  @OneToMany(() => GenreEntity, (genre) => genre.cartoon, {
    cascade: true,
  })
  genres?: GenreEntity[];

  @Field(() => [PersonnageEntity])
  @OneToMany(() => PersonnageEntity, (personnage) => personnage.cartoon, {
    cascade: true,
  })
  personnages?: PersonnageEntity[];
}
