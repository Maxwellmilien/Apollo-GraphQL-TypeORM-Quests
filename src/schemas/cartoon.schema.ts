export const Cartoon = `{
  id: ID
  name: String
  description: String
  nb_of_episodes: Int
  nb_of_seasons: Int
  genres: [String]
  realisator: String
  author: String
  ft_diffusion: String
  personnages: [Personnage]
}`;

export const CartoonInput = `{
  name: String
  description: String
  nb_of_episodes: Int
  nb_of_seasons: Int
  genres: [String]
  realisator: String
  author: String
  ft_diffusion: String
  personnages: [PersonnageInput]
}`;
