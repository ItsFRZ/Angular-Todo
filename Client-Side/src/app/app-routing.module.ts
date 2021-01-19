import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoSaveComponent } from './todo-save/todo-save.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';

const routes: Routes = [

  {path : 'home', component : TodoSaveComponent},
  {path : '', redirectTo : 'home' , pathMatch : 'full'},
  {path : 'update/:id', component : TodoUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
