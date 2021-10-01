import { createAction, props } from '@ngrx/store';
import { ToDo } from '../../models/todo';

export const DeleteTodo = createAction('Delete Todo', props<{ id: string }>());

export const GetTodoById = createAction('Get Todo By Id', props<{ id: string }>());

export const ProvideTodos = createAction(
  'Provide Todos',
  props<{ todos: any[] }>()
);

export const AddTodo = createAction('Add Todo', props<{ todo: ToDo }>());

export const UpdateTodo = createAction('Update Todo', props<{ todo: ToDo }>());
