import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cartoon {
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
}
