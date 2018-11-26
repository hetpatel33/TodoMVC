import React, { Component } from 'react'
import './styles.css'

export default class TodoItem extends Component {

render() {
    let todo = this.props.todo;
    return (
        <li className={ todo.completed ? 'todo-item todo-completed' : 'todo-item' }>
            <label className="todo-label">
                { todo.text }
                <input type="checkbox"
                    checked={ todo.completed } 
                    value={ todo.id } 
                    onChange={ this.props.handleToggle } />
                <span className="checkmark"></span></label>
                <button className="remove-button fr"
                  onClick={() => this.props.handleRemoveTodo(todo.id)} />
        </li>
    );
}
}
