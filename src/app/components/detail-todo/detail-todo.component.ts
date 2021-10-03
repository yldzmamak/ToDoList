import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.scss'],
})
export class DetailTodoComponent implements OnInit {
  id: any = '';
  todo: any;

  todoList$: Observable<ToDo[]> = this.todoService.todoList$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    this.getTodoById(this.id);
  }

  getTodoById(id: string) {
    this.todo = this.todoService.getTodoById(id);
    this.todo ? null : this.router.navigateByUrl('todo');
  }

  toRouteUrl(url: string, id: any = null) {
    id != null
      ? this.router.navigateByUrl(url + '?id=' + id)
      : this.router.navigateByUrl(url);
  }

  deleteToDo(id: string) {
    this.todoService.deleteTodo(id.toString());
    this.toRouteUrl('/todo');
  }
}
