import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  todo : Todo = new Todo();

  constructor(private todoService:TodoService,
    private routes : ActivatedRoute,private router:Router) { }

  id : number;
  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];
    this.todoService.getTodoById(this.id).subscribe(
      data => {this.todo = data},
      error => console.log(error)
    );
  }


  saveTodo(){
    this.todoService.saveTodo(this.todo).subscribe(
      data => {console.log(data);
      this.onBack();
      }
      ,      
      error => console.log(error)

    );
  }

  todoData : Todo =  new Todo();
  onSubmit(){
    this.saveTodo();
  }



  onBack(){
    this.router.navigate(['home']);
  }


}

