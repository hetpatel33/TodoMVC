import React from 'react'
import './styles.css';
import InputBox from './InputBox'

const TodoInput = ({onEnter, onActivateAll}) => {

    return (
        <div className="todo-bar-container">
            <label className="activate-all" onClick={onActivateAll}>❯</label>
            <InputBox onEnter={ onEnter } placeholder="What needs to be done?" />
        </div>
    )
}

export default TodoInput;