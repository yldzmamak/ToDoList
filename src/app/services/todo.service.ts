import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//actions
import {
  AddTodo,
  DeleteTodo,
  GetTodoById,
  ProvideTodos,
  UpdateTodo,
} from '../store/actions/todos.action';

// models
import { ToDo } from '../models/todo';

//reducers
import { AppState } from '../store/reducers/todos.reducer';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  TODOS: ToDo[] = [];

  constructor(private store: Store<AppState>) {}

  todos$: Observable<ToDo[]> =
    this.store && this.store.select((s) => s.appTodo).pipe(map((b) => b.todos));

  todoCount$: Observable<number> = this.todos$.pipe(map((b) => b.length));

  getTodos() {
    this.store.dispatch(ProvideTodos({ todos: this.TODOS }));
  }

  /*  getTodoById(id: string) {
    this.store.dispatch(GetTodoById({ id: id, todos: this.todos$ }));
  } */

  deleteTodo(id: string) {
    this.store.dispatch(DeleteTodo({ id }));
  }

  createTodo(todo: ToDo) {
    const dispatchTodo: ToDo = new ToDo(
      todo.title,
      todo.description,
      todo.status,
      todo.priority
    );

    this.store.dispatch(AddTodo({ todo: dispatchTodo }));
  }

  updateTodo(todo: ToDo) {
    this.store.dispatch(UpdateTodo({ todo: todo }));
  }
}
