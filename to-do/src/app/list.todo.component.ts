import { Component, Input } from '@angular/core';

import { Todos } from './todos';
import { TodoService } from './todo-service';

@Component({
  selector: 'list-todo',
  template: `
	<h3>Current To-Do's</h3>
	<ul>
		<li *ngFor="let todo of todos">
		{{todo.id}} - <a href="#">{{todo.name}}</a>
		<p>{{todo.desc}}</p>
		</li>
	</ul>
	<div><a routerLink="/createTodo" routerLinkActive="active">Create new +</a></div>
  `,
})



export class ListTodoComponent  { 
	name = 'To-Do App'; 
	todos: Todos[];

	@Input() todo: Todos;

	constructor(private todoService: TodoService) {
		this.todoService.getTodoes()
			.then((todos:any) => {
				this.todos = todos;
			});
	}

}



