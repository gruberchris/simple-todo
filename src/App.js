import React from 'react';

import NavBar from './components/NavBar';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      todoIdCounter: 0
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(description) {
    this.setState((prevState) => {
      const updatedTodoIdCounter = prevState.todoIdCounter + 1;
      const todo = { id: updatedTodoIdCounter, description };

      return {
        todos: [...prevState.todos, todo],
        todoIdCounter: updatedTodoIdCounter
      };
    });
  }

  removeTodo(id) {
    const { todos } = this.state;

    // Filter out all the todo items except the one todo we want to remove
    const filteredTodos = todos.filter(todo => todo.id !== id);

    // Update the state with the new todo list minus the one todo we removed
    this.setState({ todos: [...filteredTodos] });
  }

  render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <NavBar />
        <ToDoForm addTodo={this.addTodo} />
        <ToDoList todos={todos} removeTodo={this.removeTodo} />
      </React.Fragment>
    );
  }
}
