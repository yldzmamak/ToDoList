import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './todo.component.html',
})
export class ToDoComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {}

  toRouteUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
