import { DataSource } from "typeorm";
import { Cartoon } from "../entitys/cartoon.entity";
import { GenreEntity } from "../entitys/genre.entity";
import { PersonnageEntity } from "../entitys/personnage.entity";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Cartoon, GenreEntity, PersonnageEntity],
  synchronize: true, //pas en prod
});
