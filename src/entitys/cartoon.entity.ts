import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GenreEntity } from "./genre.entity";
import { PersonnageEntity } from "./personnage.entity";

@Entity()
export class CartoonEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  nb_of_episodes: number;

  @Column()
  nb_of_seasons: number;

  @Column()
  realisator: string;

  @Column()
  author: string;

  @Column()
  ft_diffusion: string;

  @OneToMany(() => GenreEntity, (genre) => genre.cartoon, {
    cascade: true,
  })
  genres?: GenreEntity[];

  @OneToMany(() => PersonnageEntity, (personnage) => personnage.cartoon, {
    cascade: true,
  })
  personnages?: PersonnageEntity[];
}
