import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-save-todo',
  templateUrl: './save-todo.component.html',
  styleUrls: ['./save-todo.component.scss'],
})
export class SaveTodoComponent implements OnInit {
  todo: ToDo = new ToDo('', '', false, 'low');

  constructor(private router: Router, private todoService: TodoService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.todoService.createTodo(this.todo);
    this.router.navigateByUrl('todo');
  }

  toRouteUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
