import React, { Component } from 'react'
import './styles.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import InfoBox from './InfoBox';
import Actions from '../constants/actions';
import getUuid from 'uuid/v4';

export default class TodoContainer extends Component {
    
  constructor(props) {
      super(props);
      
      this.state = {
          todos: [],
          activeState: Actions.ALL_TODO,
      }
  }

  handleActivateAll = () => {
    const update = this.getRemainingCount() ? true : false;
    const todos = this.state.todos.map(todo => { 
        return {...todo, completed: update}
    });
    this.handleTodoListUpdate(todos);
  }

  handleAddTodo = (text) => {

    const id = getUuid();
    const todos = [
        ...this.state.todos,
        {
            id: id,
            completed: false,
            text
        },
    ]

    this.handleTodoListUpdate(todos);
  }
  
  handleTodoListUpdate = (todos) => {
    this.setState({
        todos: todos
    });
  }

  handleClearcompleted = () => {
    const todos = this.state.todos.filter(todo => !todo.completed)
    this.handleTodoListUpdate(todos);
  }

  handleFilter = (updatedState) => {
      this.setState({
          activeState: updatedState,
      });
  }

  getRemainingCount = () => {
      return this.state.todos.filter(todo => !todo.completed).length;
  }

  shouldShowClearCompleted = () => {
      return this.state.todos.length > 0 && this.getRemainingCount() !==  this.state.todos.length;
  }
  
  render() {
      const todos = this.state.todos;
      
      return (
          <div className="content">
              <TodoInput onEnter={ this.handleAddTodo }
                         onActivateAll={this.handleActivateAll} />
              <TodoList todos={ todos }
                        activeState={ this.state.activeState }
                        onStateUpdate= {this.handleTodoListUpdate } />        
              <InfoBox activeState={ this.state.activeState }
                       onFilterUpdate={ this.handleFilter }
                       onClearcompleted={ this.handleClearcompleted }
                       getRemainingCount= {this.getRemainingCount}
                       showClearCompleted={this.shouldShowClearCompleted} />
          </div>
      );
  }
}
