import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-save',
  templateUrl: './todo-save.component.html',
  styleUrls: ['./todo-save.component.css']
})
export class TodoSaveComponent implements OnInit {

  todoList : Todo[];
  todoData : Todo = new Todo();

  constructor(private todoService : TodoService,
    private routes:ActivatedRoute,private router:Router) { }

  getAllTodo(){
    this.todoService.getAllTodo().subscribe(data => {
      this.todoList = data;
    },error => console.log(error)
    );
  }

  
  
  //Remove All Data
  removeAll(){
    this.todoService.deleteAll().subscribe(
      data => {console.log(data),
      this.getAllTodo();
      }
    );
  }

  ngOnInit(): void {
    this.getAllTodo();
  }

  onSubmit(){
    this.todoService.saveTodo(this.todoData).subscribe(
      data => {console.log(data),
      this.getAllTodo();
      }
    ,error => console.log(error)
    );
  }




  onUpdate(id:number){
   this.router.navigate(['update',id]);
  }

  mypro : boolean = true;
  
  onDone(ref){
   ref.classList.add("inputC");
  }


}
