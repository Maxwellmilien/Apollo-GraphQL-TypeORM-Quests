import { Cartoon } from "../types/cartoon.type";
import { CartoonEntity } from "../entitys/cartoon.entity";
import { PersonnageEntity } from "../entitys/personnage.entity";
import { GenreEntity } from "../entitys/genre.entity";

type CartoonByIdArgs = {
  id: string;
};

export async function getCartoons(
  _: unknown,
  _args: unknown,
): Promise<Cartoon[]> {
  const result = (await CartoonEntity.find({
    relations: ["genres", "personnages"],
  })) as CartoonEntity[];

  const cartoons = result.reduce((acc, entity) => {
    const { personnages, genres, ...other } = entity;
    acc.push({
      genres: genres?.map((g) => g.name) || [],
      personnages: personnages?.map(({ cartoon, ...rest }) => rest) || [],
      ...other,
    } as Cartoon);
    return acc;
  }, [] as Cartoon[]);

  return cartoons;
}

export async function getOneCartoonById(
  _: unknown,
  args: CartoonByIdArgs,
): Promise<Cartoon> {
  const result = (await CartoonEntity.findOne({
    where: { id: +args.id },
    relations: ["genres", "personnages"],
  })) as CartoonEntity;

  const { personnages, genres, ...other } = result;

  const new_cartoon = {
    genres: genres?.map((g) => g.name) || [],
    personnages: personnages?.map(({ cartoon, ...rest }) => rest) || [],
    ...other,
  } as Cartoon;

  return new_cartoon;
}

export async function createCartoon(
  _: unknown,
  args: { cartoon: Omit<Cartoon, "id"> },
): Promise<String> {
  const { personnages, genres, ...rest } = args.cartoon;

  const new_personnages = personnages?.map((per) => {
    const p = new PersonnageEntity();
    p.name = per.name;
    p.role = per.role;
    p.short_description = per.short_description;
    return p;
  });

  const new_genres = genres?.map((g) => {
    const data = new GenreEntity();
    data.name = g;
    return data;
  });

  const cartoon = new CartoonEntity();
  Object.assign(cartoon, rest);
  cartoon.personnages = new_personnages;
  cartoon.genres = new_genres;

  const result = await cartoon.save();

  return "" + result.id;
}

export async function deleteCartoon(
  _: unknown,
  args: CartoonByIdArgs,
): Promise<string | null> {
  // Find the cartoon by ID
  const cartoon = await CartoonEntity.findOne({
    where: { id: +args.id },
    relations: ["genres", "personnages"],
  });

  if (cartoon !== null) {
    const { genres, personnages, ...r } = cartoon;
    r;
    genres?.forEach((g) => CartoonEntity.delete(g));
    personnages?.forEach((p) => CartoonEntity.delete(p));
  }

  cartoon?.remove();
  return "ok";
}
