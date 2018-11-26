import React, { Component } from 'react'
import TodoItem from './TodoItem'
import './styles.css';

class TodoList extends Component {

render() {
  const todoItems = this.props.todos.map((todo, index) => {
      return (
          <TodoItem key={ index }
                    todo={ todo } 
                    handleToggle={ this.props.handleToggle } 
                    handleRemoveTodo={ this.props.handleRemoveTodo } />
      );
  });
  
  return (
      <ul className="todo-list">
          { todoItems }
      </ul>
  );
}
}
export default TodoList;
