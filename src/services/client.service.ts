import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [],
  synchronize: true, //pas en prod
});
