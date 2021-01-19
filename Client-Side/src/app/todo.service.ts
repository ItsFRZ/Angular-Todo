import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './todo';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseURL = "http://localhost:8080/tapi";
  constructor(private http:HttpClient) { }

  getAllTodo():Observable<Todo[]>{

    return this.http.get<Todo[]>(`${this.baseURL}`);
  }
  

  saveTodo(todoData : Todo):Observable<Object>{
    return this.http.post(`${this.baseURL}`,todoData);
  }

  getTodoById(id:number):Observable<Todo>{
    return this.http.get<Todo>(`${this.baseURL}/${id}`);
  }

  deleteAll():Observable<any>{
    return this.http.delete(`${this.baseURL}`);
  }  

}
