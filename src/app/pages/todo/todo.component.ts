import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

//models
import { ToDo } from 'src/app/models/todo';

//services
import { TodoService } from 'src/app/services/todo.service';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class ToDoComponent implements OnInit {
  todoList$: Observable<ToDo[]> = this.todoService.todoList$;

  pageIndex: number = 0;
  pageSize: number = 10;

  todoList: ToDo[];

  columnList = {
    detail: 'detail',
    title: 'title',
    priority: 'priority',
    status: 'status',
    actions: 'actions',
  };

  displayedColumns = Object.values(this.columnList);

  constructor(private router: Router, private todoService: TodoService) {}

  ngOnInit() {
    this.getTodoList();
  }

  eventCheck(event: any, todo: ToDo) {
    let x = JSON.parse(JSON.stringify(todo));
    x.status = event.target.checked;
    this.todoService.updateTodo(x);
  }

  getTodoList() {
    this.todoList$.pipe(take(1)).subscribe((todoList) => {
      this.todoList = todoList;
    });
  }

  toRouteUrl(url: string, id: any = null) {
    id != null
      ? this.router.navigateByUrl(url + '?id=' + id)
      : this.router.navigateByUrl(url);
  }

  deleteToDo(id: string) {
    this.todoService.deleteTodo(id.toString());
    this.getTodoList();
  }
}
