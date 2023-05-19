import { Api } from 'providers';
import { ITodo } from 'interfaces';

const getAllTodos = () => Api.get<ITodo[]>('/v1/todos')

const createTodo = (todo: Pick<ITodo, 'task' | 'isDone'>) => Api.post('/v1/todos', todo)

export const TodoService = {
  getAllTodos,
  createTodo
} 