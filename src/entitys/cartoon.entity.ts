import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GenreEntity } from "./genre.entity";

@Entity()
export class CartoonEntity {
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
  realisation: string;

  @Column()
  author: string;

  @Column()
  ft_diffusion: string;

  @Column()
  genres?: GenreEntity[];
}
