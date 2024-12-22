import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import {
  CreateAnotationController,
  DeleteAnotationController,
  GetAllAnoationsController,
  GetAnotationController,
  UpdateAnotationController,
  UserController,
} from "./controllers";
import {
  validateDataUser,
  validateLoginUser,
  verifyCreateAnotation,
  verifyUpdateAnotation,
  verifyUserExist,
} from "./middlewares";
import { AnotationRepository, UsersRepository } from "./repositories";

const app = express();
const userController = new UserController();

app.use(express.json());

app.use(cors());
// Adiciona cabeçalhos HTTP que informam aos navegadores para permitir que uma aplicação Web seja executada em uma origem e acesse recursos de outra origem diferente

app.use(express.urlencoded({ extended: false }));
// Converte caractéres especiais nas URL's

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => 
  console.log(`Servidor iniciado na porta ${PORT}`)
);

export const anotationRepository = new AnotationRepository();
export const usersRepository = new UsersRepository();

app.get("/", (request: Request, response: Response) => {
  return response.send({ message: "OK" });
});

// ROTA DE CRIAÇÃO DE USUÁRIO
app.post("/users/signup", validateDataUser, userController.create);

// ROTA DE LOGIN DE USUÁRIO
app.post("/users/signin", validateLoginUser, userController.login);

// ROTA DE CRIAÇÃO DE ANOTAÇÃO
const createAnotationController = new CreateAnotationController();
app.post(
  "/users/:userId/anotation",
  verifyCreateAnotation,
  verifyUserExist,
  createAnotationController.execute
);

// ROTA PARA LISTAR TODAS AS ANOTAÇÕES
const getAllAnotationsController = new GetAllAnoationsController();
app.get(
  "/users/:userId/anotation",
  verifyUserExist,
  getAllAnotationsController.execute
);

// ROTA PARA LISTAR ANOTAÇÃO ESPECÍFICA
const getAnotationController = new GetAnotationController();
app.get(
  "/users/:userId/anotation/:id",
  verifyUserExist,
  getAnotationController.execute
);

// ROTA PARA DELETAR ANOTAÇÃO
const deleteAnotationController = new DeleteAnotationController();
app.delete(
  "/users/:userId/anotation/:id",
  verifyUserExist,
  deleteAnotationController.execute
);

// ROTA PARA ATUALIZAÇÃO ANOTAÇÃO
const updateAnotationController = new UpdateAnotationController();
app.put(
  "/users/:userId/anotation/:id",
  verifyUserExist,
  verifyUpdateAnotation,
  updateAnotationController.execute
);
