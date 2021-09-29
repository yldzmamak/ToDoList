import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/todo', pathMatch: 'full' },
      {
        path: 'todo',
        loadChildren: () => import('./pages/todo/todo.module').then((m) => m.ToDoModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/todo',
  },
];
