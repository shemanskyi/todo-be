import { todoService } from "../../services";
import { errorHandlerWrapper } from "../../utils";
import { generateToken } from "../../utils/generate";
import { comparePassword } from "../../utils/password";
import httpStatus from "http-status";

const getAllTodos = async (req, res) => {
    const { uuid } = req.user;   
    const todos = await todoService.getAll({ userId: uuid })
    res.status(httpStatus.OK).json(todos);
}

const createTodo = async (req, res) => {
    const { uuid } = req.user;   

    const todo = await todoService.createTodo({ userId: uuid, ...req.body })

    res.status(httpStatus.CREATED).json(todo);
}

const updateTodo = async (req, res) => {
    const { uuid } = req.user;   

    res.status(httpStatus.OK).json();
}

const deleteTodo = async (req, res) => {
    const { uuid } = req.params;   

    const todo = await todoService.deleteTodo({ uuid })

    res.status(httpStatus.NO_CONTENT).json(todo);
}


export const getAllTodoController = errorHandlerWrapper(getAllTodos);
export const createTodoController = errorHandlerWrapper(createTodo);
export const deleteTodoController = errorHandlerWrapper(deleteTodo);