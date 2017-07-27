import { Injectable } from '@angular/core';

import { Todos } from './todos';
import { TODOS } from './mock-todos';

@Injectable()

export class TodoService { 

  getTodoes(): Promise<Todos[]> {
    return Promise.resolve(TODOS);
  }

}



