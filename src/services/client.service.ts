import { DataSource } from "typeorm";
import { CartoonEntity } from "../entitys/cartoon.entity";
import { GenreEntity } from "../entitys/genre.entity";
import { PersonnageEntity } from "../entitys/personnage.entity";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [CartoonEntity, GenreEntity, PersonnageEntity],
  synchronize: true, //pas en prod
});
