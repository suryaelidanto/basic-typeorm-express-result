import * as express from "express";
import { Request, Response } from "express";
import { myDataSource } from "./app-data-source";
import { User } from "./entity/user.entity";

myDataSource
  .initialize()
  .then(() => console.log("Data source has been initialized!"))
  .catch(() => console.log("Error during data initialization in DataSource"));

const app = express();
app.use(express.json());

app.get("/users", async function (req: Request, res: Response) {
  const users = await myDataSource.getRepository(User).find();

  res.json(users);
});

app.get("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to return user by id
});

app.post("/users", function (req: Request, res: Response) {
  // here we will have logic to save a user
});

app.put("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to update a user by a given user id
});

app.delete("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to delete a user by a given user id
});

const PORT = 3000;

// start express server
app.listen(PORT);

console.log(`server running in ${PORT}`);
