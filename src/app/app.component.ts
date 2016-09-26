import { Component } from '@angular/core';
import { Todo } from './todo';

const TODOS = [
    new Todo("Sleeping"),
    new Todo("Email"),
    new Todo("Watching TV")
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "Todo";
  selectedTodo: Todo;

  todos:Array<Todo> =[];

  constructor(){
    this.todos = TODOS;
    this.selectedTodo = new Todo("hello");
  }

  addTodo(){

    this.todos.push( new Todo(
      this.selectedTodo.desc
    ))
  }

  deleteTodo(index){
    this.todos.splice(index, 1);
  }

}
