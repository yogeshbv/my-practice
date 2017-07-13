import { Component } from '@angular/core';


export class Todos {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} </h1>

  		<h3>Current To-Do's</h3>
  		<ul>
  			<li *ngFor="let todo of todos">{{todo.id}} - <a hre="#">{{todo.name}}</a></li>
  		</ul>`,
})



export class AppComponent  { 
	name = 'To-Do App'; 

	todos: Todos = [
		{id: 1, name: 'Gym'},
		{id: 2, name: 'Cricket'},
		{id: 3, name: 'Office'}
	];
}



