import { Component } from '@angular/core';

@Component({
  selector: 'create-page',
  template: `<h3>Create  </h3>
	<form>
	  <table cellpadding="10">
	    <tr>
	      <td>Enter you task to-do</td><td><input type="text"  name="name" /></td>
	    </tr>
	    <tr>
	      <td>Enter description</td><td><input type="text"  name="desc" /></td>
	    </tr>
	    <tr>
	      <td>Enter date</td><td><input type="text"  name="date" /></td>
	    </tr>
	    <tr>
	      <td><button>Add</button></td><td><button>Reset</button></td>
	    </tr>
	  </table>
	</form>
  `,
})



export class CreateTodoComponent  { 
}



