import React, { Component } from 'react'
import './styles.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import InfoBox from './InfoBox';
import getUuid from 'uuid/v4';
import helperFunctions from '../constants/helperFunctions';
import Actions from '../constants/actions';

export default class TodoContainer extends Component {
    
  constructor(props) {
      super(props);
      
      this.state = {
          todos: [],
          activeFilter: Actions.ALL_TODO,
      }
  }

  handleActivateAll = () => {
    const update = helperFunctions.getRemainingCount(this.state.todos) ? true : false;
    const todos = helperFunctions.updateCompletedProperty(this.state.todos, update);
    this.handleTodoListUpdate(todos);
  }

  handleAddTodo = (text) => {

    const newTodo = {
        id: getUuid(),
        completed: false,
        text
    };
    
    const todos = helperFunctions.pushTodo(this.state.todos, newTodo);

    this.handleTodoListUpdate(todos);
  }
  
  handleTodoListUpdate = (todos) => {
    this.setState({
        todos: todos
    });
  }

  handleClearcompleted = () => {
    const todos = helperFunctions.getRemainingTodos(this.state.todos);
    this.handleTodoListUpdate(todos);
  }

  handleFilterUpdate = (updatedState) => {
      this.setState({
          activeFilter: updatedState,
      });
  }

  getFilteredTodos(todos, filter) {
    switch(filter) {
        case Actions.ACTIVE_TODO:
            return helperFunctions.getRemainingTodos(todos);
        case Actions.COMPLETE_TODO:
            return helperFunctions.getCompletedTodos(todos);
        default:
            return todos;
    }
  }

  shouldShowClearCompleted() {
      return this.state.todos.length > 0 && helperFunctions.getRemainingCount(this.state.todos) !==  this.state.todos.length;
  }
  
  render() {
      const todos = this.state.todos;
      
      return (
        <div className="content">
            <TodoInput onEnter={ this.handleAddTodo }
                       onActivateAll={this.handleActivateAll} />
            <TodoList todos={ this.getFilteredTodos(todos, this.state.activeFilter) }
                      onStateUpdate= {this.handleTodoListUpdate } />        
            <InfoBox activeFilter={ this.state.activeFilter }
                     onFilterUpdate={ this.handleFilterUpdate }
                     onClearcompleted={ this.handleClearcompleted }
                     remainingTodoCount= {helperFunctions.getRemainingCount(this.state.todos)}
                     showClearCompleted={this.shouldShowClearCompleted()} />
        </div>
      );
  }
}
