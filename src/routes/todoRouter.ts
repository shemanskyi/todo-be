import { Router } from "express";
import { TodoValidator } from "../validators";
import { AuthController, TodoController } from "../controllers";

import { checkAuth } from "../utils";

export const todoRouter = Router();

todoRouter.get(
  "/todo",
  checkAuth,
  TodoController.getAllTodoController
);

todoRouter.post(
  "/todo",
  checkAuth,
  TodoValidator.todoValidator(),
  TodoController.createTodoController
);

todoRouter.put(
  "/todo/:uui",
  checkAuth,
  TodoValidator.todoValidator(),
  TodoController.createTodoController
);

todoRouter.delete(
  "/todo/:uuid",
  checkAuth,
  TodoController.deleteTodoController
);
