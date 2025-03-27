import { DataSource } from "typeorm";
import { Cartoon } from "../entitys/cartoon.entity";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Cartoon],
  synchronize: true, //pas en prod
});
