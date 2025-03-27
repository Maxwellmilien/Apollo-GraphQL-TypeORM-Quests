import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GenreEntity } from "./genre.entity";
import { PersonnageEntity } from "./personnage.entity";

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

  @OneToMany(() => GenreEntity, (genre) => genre.cartoon)
  genres?: GenreEntity[];

  @OneToMany(() => PersonnageEntity, (personnage) => personnage.cartoon)
  personnages?: PersonnageEntity[];
}
