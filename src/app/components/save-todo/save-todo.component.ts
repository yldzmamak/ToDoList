import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//models
import { ToDo } from 'src/app/models/todo';

//pipes
import { TranslatePipe } from 'src/app/pipes/translate.pipe';

//services
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-save-todo',
  templateUrl: './save-todo.component.html',
  styleUrls: ['./save-todo.component.scss'],
})
export class SaveTodoComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl(),
    priority: new FormControl('', Validators.required),
  });

  id: string;
  todo: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    public translatePipe: TranslatePipe
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.id ? this.getTodoById(this.id) : null;
    });
  }

  getTodoById(id: string) {
    this.todo = this.todoService.getTodoById(id);
    this.todo
      ? this.setFormValues(this.todo)
      : this.router.navigateByUrl('todo');
  }

  setFormValues(todo: ToDo) {
    this.form.setValue({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      status: todo.status,
      priority: todo.priority,
    });
  }

  onSubmit(todo: ToDo) {
    if (this.form.valid) {
      todo?.id ? this.updateTodo(todo) : this.saveTodo(todo);
    } else {
      this.form.setErrors({ required: true });
    }
  }

  saveTodo(todo: ToDo) {
    this.todoService.createTodo(todo);
    this.router.navigateByUrl('todo');
  }

  updateTodo(todo: ToDo) {
    this.todoService.updateTodo(todo);
    this.router.navigateByUrl('todo');
  }

  toRouteUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
