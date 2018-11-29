import React from 'react'
import TodoItem from './TodoItem'
import './styles.css';
import Actions from '../constants/actions';

const TodoList = ({todos, activeState, onStateUpdate}) => {

    const handleToggle = function(ev) {
        const id = ev.target.value;
        const updatedTodos = todos.map(
          todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        onStateUpdate(updatedTodos);
    }

    const handleRemove = function(id) {
        const updatedTodos = todos.filter(todo => todo.id !== id)
        onStateUpdate(updatedTodos);
    }

    let filteredTodos;
    switch(activeState) {
        case Actions.ACTIVE_TODO:
            filteredTodos = todos.filter(todo => !todo.completed)
            break;
        case Actions.COMPLETE_TODO:
            filteredTodos = todos.filter(todo => todo.completed)
            break;
        default:
            filteredTodos = todos;
            break;
    }

    const todoItems = filteredTodos.map((todo) => {
        return (
            <TodoItem key={ todo.id }
                      todo={ todo } 
                      onToggle={ handleToggle } 
                      onRemove={ handleRemove } />
        );
    });

    return (
        <ul className="todo-list">
            { todoItems }
        </ul>
    );
};

export default TodoList;
