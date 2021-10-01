import { createReducer, on } from '@ngrx/store';
import {
  ProvideTodos,
  DeleteTodo,
  AddTodo,
  UpdateTodo,
  GetTodoById,
} from '../actions/todos.action';
import { ToDo } from 'src/app/models/todo';

interface TodoState {
  todos: ToDo[];
}

const initialTodoState: TodoState = {
  todos: [],
};

interface Todoo {
  todo: ToDo;
}

const initialTodooState: Todoo = {
  todo: new ToDo('', '', false, 'low'),
};

const TodoReducer = createReducer(
  initialTodoState,
  on(ProvideTodos, (state: TodoState, { todos }) => ({
    ...state,
    todos,
  })),

  on(DeleteTodo, (state: TodoState, { id }) => ({
    ...state,
    todos: state.todos.filter((p) => p.id !== id),
  })),

  on(AddTodo, (state: TodoState, { todo }) => ({
    ...state,
    todos: state.todos.concat(todo),
  })),

  on(UpdateTodo, (state: TodoState, { todo }) => ({
    ...state,
    todos: state.todos.map((u) => (u.id !== todo.id ? u : todo)),
  }))
);

/* const TodooReducer = createReducer(
  initialTodooState,
  on(GetTodoById, (state: Todoo, { id, todos }) => ({
    ...state,
    todo: state.todos.find((p) => p.id == id),
  }))
); */

export interface AppState {
  appTodo: TodoState;
  todo: ToDo;
}

export const AppReducers = {
  appTodo: TodoReducer,
};
