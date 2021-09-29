import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTodoComponent } from './save-todo.component';

describe('SaveTodoComponent', () => {
  let component: SaveTodoComponent;
  let fixture: ComponentFixture<SaveTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
