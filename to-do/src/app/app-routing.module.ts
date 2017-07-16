import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTodoComponent }  from './create.todo.component';
import { ListTodoComponent }  from './list.todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: ListTodoComponent },
  { path: 'createTodo', component: CreateTodoComponent },
  { path: 'allTodo',     component: ListTodoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}