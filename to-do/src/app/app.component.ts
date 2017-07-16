import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} </h1>


    <h1>{{title}}</h1>
    <nav>
      <ul>
        <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
        <li><a routerLink="/createTodo" routerLinkActive="active">Create new</a></li>
        <li><a routerLink="/allTodo" routerLinkActive="active">List all</a></li>
      </ul>
    </nav>
    <hr/>
    <router-outlet></router-outlet>
    `,
})



export class AppComponent  { 

}



