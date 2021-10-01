import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class ToDoComponent implements OnInit, AfterViewInit {
  todos$: Observable<ToDo[]> = this.todoService.todos$;

  constructor(private router: Router, private todoService: TodoService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  eventCheck(event: any, todo: ToDo) {
    let x = JSON.parse(JSON.stringify(todo));
    x.status = event.target.checked;
    this.todoService.updateTodo(x);
  }

  toRouteUrl(url: string, id: any = null) {
    id != null
      ? this.router.navigateByUrl(url + '?id=' + id)
      : this.router.navigateByUrl(url);
  }

  deleteToDo(id: string) {
    this.todoService.deleteTodo(id.toString());
  }
}
