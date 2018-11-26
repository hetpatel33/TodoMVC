import React, { Component } from 'react'
import './styles.css';

export default class TodoBar extends Component {
    
    render() {
        return (
            <div className="todo-bar-container">
                <label className="activate-all" onClick={this.props.handleActivateAll}></label>
                <input type="text" 
                    className="todo-bar" 
                    placeholder="What needs to be done?"
                    onKeyDown={ this.props.handleAddTodo } />
            </div>
        );
    }
}
