import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CreateTodoComponent }  from './create.todo.component';
import { ListTodoComponent }  from './list.todo.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ],
  declarations: [ AppComponent, CreateTodoComponent, ListTodoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
