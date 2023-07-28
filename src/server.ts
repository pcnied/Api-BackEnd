import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import { UserController } from "./controllers";
import { validateDataUser, validateLoginUser } from "./middlewares";

const app = express();
const userController = new UserController();

app.use(express.json());

app.use(cors());
// Adiciona cabeçalhos HTTP que informam aos navegadores para permitir que uma aplicação Web seja executada em uma origem e acesse recursos de outra origem diferente

app.use(express.urlencoded({ extended: false }));
// Converte caractéres especiais nas URL's

app.listen(process.env.PORT, () =>
  console.log("Servidor iniciado", process.env.PORT)
);

app.get("/", (request: Request, response: Response) => {
  return response.send({ message: "OK" });
});

app.post("/users/signup", validateDataUser, userController.create);

app.post("/users/signin", validateLoginUser, userController.login);
