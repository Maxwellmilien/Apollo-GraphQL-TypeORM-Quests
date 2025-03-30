import { CartoonEntity } from "../entitys/cartoon.entity";
import { PersonnageEntity } from "../entitys/personnage.entity";
import { GenreEntity } from "../entitys/genre.entity";
import { Field, InputType, Mutation, Query, Resolver, Arg } from "type-graphql";

@InputType()
export class GenreInput {
  @Field()
  name: string;
}

@InputType()
export class PersonnageInput {
  @Field()
  name: string;
  @Field()
  role: string;
  @Field()
  short_description: string;
}

@InputType()
export class CartoonInput {
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  nb_of_episodes: number;
  @Field()
  nb_of_seasons: number;
  @Field(() => [GenreInput])
  genres: [GenreInput];
  @Field()
  realisator: string;
  @Field()
  author: string;
  @Field()
  ft_diffusion: string;
  @Field(() => [PersonnageInput])
  personnages: [PersonnageInput];
}

@Resolver(CartoonEntity)
class CartoonResolvers {
  @Query(() => [CartoonEntity])
  async getCartoons(): Promise<CartoonEntity[]> {
    const result = (await CartoonEntity.find({
      relations: ["genres", "personnages"],
    })) as CartoonEntity[];

    return result;
  }

  @Query(() => CartoonEntity)
  async getOneCartoonById(@Arg("id") id: string): Promise<CartoonEntity> {
    const result = (await CartoonEntity.findOne({
      where: { id: +id },
      relations: ["genres", "personnages"],
    })) as CartoonEntity;

    return result;
  }

  @Mutation(() => String)
  async createCartoon(@Arg("cartoon") cartoon: CartoonInput): Promise<String> {
    const { personnages, genres, ...rest } = cartoon;

    const new_personnages = personnages?.map((per) => {
      const p = new PersonnageEntity();
      p.name = per.name;
      p.role = per.role;
      p.short_description = per.short_description;
      return p;
    });

    const new_genres = genres?.map((g) => {
      const data = new GenreEntity();
      data.name = g.name;
      return data;
    });

    const new_cartoon = new CartoonEntity();
    Object.assign(new_cartoon, rest);
    new_cartoon.personnages = new_personnages;
    new_cartoon.genres = new_genres;

    const result = await new_cartoon.save();

    return "" + result.id;
  }

  @Mutation(() => String)
  async deleteCartoon(@Arg("id") id: string): Promise<string> {
    // Find the cartoon by ID
    const cartoon = await CartoonEntity.findOne({
      where: { id: +id },
      relations: ["genres", "personnages"],
    });

    if (!cartoon) {
      throw new Error(`Cartoon with id ${id} not found`);
    }

    // Delete associated genres and personnages
    if (cartoon.personnages && cartoon.personnages.length > 0) {
      await PersonnageEntity.remove(cartoon.personnages);
    }

    if (cartoon.genres && cartoon.genres.length > 0) {
      await GenreEntity.remove(cartoon.genres);
    }

    // Delete the cartoon itself
    await CartoonEntity.remove(cartoon);

    return "Cartoon successfully deleted";
  }
}

export default CartoonResolvers;
