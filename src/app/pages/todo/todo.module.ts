import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//components
import { DetailTodoComponent } from 'src/app/components/detail-todo/detail-todo.component';
import { SaveTodoComponent } from 'src/app/components/save-todo/save-todo.component';
import { ToDoComponent } from './todo.component';

//modules
import { PipeModule } from 'src/app/pipes/pipe.module';

const routes: Routes = [
  {
    path: '',
    component: ToDoComponent,
  },
  {
    path: 'save',
    component: SaveTodoComponent,
  },
  {
    path: 'detail',
    component: DetailTodoComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    PipeModule,
  ],
  declarations: [ToDoComponent, SaveTodoComponent, DetailTodoComponent],
})
export class ToDoModule {}
