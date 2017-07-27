import { Component } from '@angular/core';

@Component({
  selector: 'create-page',
  template: `<h3>Create  </h3>
	<form>
	  <table cellpadding="10">
	    <tr>
	      <td>Enter you task to-do</td><td><input type="text"  [ngModel]="todoModel.name" name="name" /></td>
	    </tr>
	    <tr>
	      <td>Enter description</td><td><input type="text"  [ngModel]="todoModel.description" name="desc" /></td>
	    </tr>
	    <tr>
	      <td>Enter date</td><td><input type="text" [ngModel]="todoModel.date"  name="date" /></td>
	    </tr>
	    <tr>
	      <td><button (click)="addToDo($event)">Add</button></td><td><button>Reset</button></td>
	    </tr>
	  </table>
	</form>
  `,
})



export class CreateTodoComponent  { 

	todoModel:any = {};

	constructor() {
	}

	addToDo(event: Event): void {
		event.preventDefault();
		console.log('add to do here....', this.todoModel);
		// inject todo service in the constructor
		// using that todo service, call its method to save todo
		// template model binding
		// use reactive forms, to build a form
	}
}



