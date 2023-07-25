import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "test-typeorm",
  entities: ["src/entity/*.ts"],
  logging: true,
  synchronize: true,
});
