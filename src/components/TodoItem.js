import React from 'react'
import './styles.css'

const TodoItem = ({todo, onToggle, onRemove}) => {

    return (
        <li className={ todo.completed ? 'todo-item todo-completed' : 'todo-item' }>
            <label className="todo-label">
                { todo.text }
                <input type="checkbox"
                    checked={ todo.completed } 
                    value={ todo.id } 
                    onChange={ onToggle } />
                <span className="checkmark"></span></label>
                <button className="remove-button fr"
                  onClick={() => onRemove(todo.id)} />
        </li>
    );
}

export default TodoItem;