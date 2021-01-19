import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSaveComponent } from './todo-save.component';

describe('TodoSaveComponent', () => {
  let component: TodoSaveComponent;
  let fixture: ComponentFixture<TodoSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
