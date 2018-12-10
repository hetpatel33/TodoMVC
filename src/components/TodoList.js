import React, {PureComponent} from 'react'
import TodoItem from './TodoItem'
import './styles.css';
import helperFunctions from '../constants/helperFunctions';

export default class TodoList extends PureComponent {

    handleToggle = (ev) => {
        const id = ev.target.value;
        const updatedTodos = helperFunctions.toggleTodo(this.props.todos, id);
        this.props.onStateUpdate(updatedTodos);
    }

    handleRemove = (id) => {
        const updatedTodos = helperFunctions.removeTodo(this.props.todos, id);
        this.props.onStateUpdate(updatedTodos);
    }

    render() {
        const todoItems = this.props.todos.map((todo) => {
            return (
                <TodoItem key={ todo.id }
                          todo={ todo } 
                          onToggle={ this.handleToggle } 
                          onRemove={ this.handleRemove } />
            );
        });

        return (
            <ul className="todo-list">
                { todoItems }
            </ul>
        );  
    }
}
