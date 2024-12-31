import { TodoEntity } from "../entities";
import { AppDataSouce } from "../db";
import { userService } from ".";

export const getAll = async (data) => {
  const { userId } = data;
  const todoRepository = AppDataSouce.getRepository(TodoEntity);

  const todos = await todoRepository.find({ where: { userId }});

  return todos;
};

export const createTodo = async (data) => {
  const { title, description, deadline, completed, userId } = data;
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const todo = todoRepository.create({ title, description, deadline, completed, userId });

  await todoRepository.save(todo);
  return todo;
};

export const updateTodo = async (data) => {
  const { title, description, deadline, completed, userId } = data;
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const todo = todoRepository.create({ title, description, deadline, completed, userId });

  await todoRepository.save(todo);
  return todo;
};

export const toggleTodoStatus = async (data) => {
  const { title, description, deadline, completed, userId } = data;
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const todo = todoRepository.create({ title, description, deadline, completed, userId });

  await todoRepository.save(todo);
  return todo;
};

export const deleteTodo = async (data) => {
  const { uuid } = data;
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const todo = await todoRepository.delete(uuid);

  return todo;
};
