export interface Cartoon {
  id: number;
  name: string;
  description: string;
  nb_of_episodes: number;
  nb_of_seasons: number;
  genres: string[];
  realisator: string;
  author: string;
  ft_diffusion: string;
  personnages: Personnage[];
}

export interface Personnage {
  id: number;
  name: string;
  role: string;
  short_description: string;
}
