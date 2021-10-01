import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  todos$: Observable<ToDo[]> = this.todoService.todos$;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
