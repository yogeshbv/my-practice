import { Component } from '@angular/core';

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

	todos: Todos[] = [
		{id: 1, name: 'Gym', desc: 'Go to gym...'},
		{id: 2, name: 'Cricket', desc: 'Playing cricket...'},
		{id: 3, name: 'Office', desc: 'Go to office...'}
	];
}



