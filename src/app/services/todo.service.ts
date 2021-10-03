import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';

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

  todoList$: Observable<ToDo[]> =
    this.store && this.store.select((s) => s.appTodo).pipe(map((b) => b.todos));

  todoCount$: Observable<number> = this.todoList$.pipe(map((b) => b.length));

  getTodos() {
    this.store.dispatch(ProvideTodos({ todos: this.TODOS }));
  }

  getTodoById(id: string) {
    let todo;
    this.todoList$.pipe(take(1)).subscribe((val) => {
      todo = val.find((item) => item.id == id);
    });
    return todo;
  }

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

  _productNames = 'dummy, dummy2, dummy3, dummy4'.split(',')

  getOrders(length = 5): object[] {
    let orders: object[] = [];
    for (let i = 0; i < length; i++) {
      let date = new Date();
      orders.push({
        'No': i + 1,
        'Name': this.randomArray(this._productNames),
        'Date': this.addDays(date, -this.random(30)).toLocaleDateString(),
        'Amount': this.random(500, 10) * 100
      });
    }
    return orders;
  }

  random(max: number, min = 0): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomArray(items: any[]): any {
    return items[this.random(items.length)];
  }

  addDays(value: Date, days: number): Date {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate() + days);
  }
}
