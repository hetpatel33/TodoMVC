import React, { Component } from 'react'
import './styles.css';
import TodoBar from './TodoBar';
import TodoList from './TodoList';
import InfoBox from './InfoBox';
import Actions from '../constants/actions';

export default class TodoContainer extends Component {
    
  constructor(props) {
      super(props);
      
      this.state = {
          todos: [],
          isAnyCompleted: false,
          leftTOdoCount: 0,
          activeState: Actions.ALL_TODO,
      }
  }
  uuidv4 = require('uuid/v4');

  handleActivateAll = () => {
    const update = this.state.leftTOdoCount === 0 ? false : true;
    this.state.todos.forEach(todo => todo.completed = update);
    let filteredTodos, leftTOdoCount;
    if(update) {
        filteredTodos = this.state.activeState === Actions.ACTIVE_TODO ? [] : this.state.todos;
        leftTOdoCount = 0;
    } else {
        filteredTodos = this.state.activeState === Actions.COMPLETE_TODO ? [] : this.state.todos;
        leftTOdoCount = this.state.todos.length;
    }
     
    
    this.setState({
        todos: this.state.todos,
        leftTOdoCount: leftTOdoCount,
        filteredTodos: filteredTodos,
    }, () => this.checkIsAnyCompleted());
  }

  handleAddTodo = (ev) => {
      const text = ev.target.value.trim();
      
      if( ev.which === 13 && text ) {
          let todos = this.state.todos;
          const id = this.uuidv4();
          
          todos.push({
              id: id,
              completed: false,
              text
          });

          const leftTodo = this.state.leftTOdoCount + 1;
          this.setState({
              todos: todos,
              leftTOdoCount: leftTodo
          });
          
          ev.target.value = '';
      }
  }
  
  handleToggle = (ev) => {
      const id = ev.target.value;
      let leftTodo = this.state.leftTOdoCount;
      const todos = this.state.todos.filter(todo => {
          if(todo.id === id) {
              todo.completed? leftTodo++ : leftTodo--; 
              todo.completed = !todo.completed;
          }

          return todo;
      });
      
      this.setState({
          todos: todos,
          leftTOdoCount: leftTodo
      }, () => this.handleFilter(this.state.activeState));
  }
  
  handleRemoveTodo = (id) => {
    let leftTodo = this.state.leftTOdoCount;
    const todos = this.state.todos.filter(todo => {
        if(todo.id === id) {
            if(!todo.completed) {
                leftTodo--;
            }
            return null;
        }
        return todo;
    });

    this.setState({
        todos: todos,
        leftTOdoCount: leftTodo
    }, () => this.handleFilter(this.state.activeState));
  }

  handleClearcompleted = (activeState) => {
    const todos = this.state.todos.filter(todo => {
        if( !todo.completed ) {
            return todo;
        }
        
        return null;
    });
    
    const filteredTodos = (activeState === Actions.COMPLETE_TODO) ? [] : todos; 
    this.setState({
        todos: todos,
        filteredTodos: filteredTodos,
    }, () => this.checkIsAnyCompleted());
  }

  handleFilter = (type) => {
      const todos = this.state.todos;
      let filter;
      
      switch(type) {
          case Actions.ACTIVE_TODO:
              filter = todos.filter(todo => {
                  if( !todo.completed ) {
                      return todo;
                  }
                  return null;
              });
              break;
          case Actions.COMPLETE_TODO:
              filter = todos.filter(todo => {
                  if( todo.completed ) {
                      return todo;
                  }
                  return null;
              });
              break;
          default:
              filter = null;
              break;
      }
      
      this.setState({
          filteredTodos: filter,
          activeState: type,
      }, () => this.checkIsAnyCompleted());
  }
  
  checkIsAnyCompleted = () => {
    if (this.state.todos.some(todo => todo.completed)) {
        this.setState({
            isAnyCompleted: true
        });
    } else {
        this.setState({
            isAnyCompleted: false
        });
    }
  }

  
  render() {
      const todos = this.state.filteredTodos || this.state.todos;
      
      return (
          <div className="content">
              <TodoBar todos={ todos } 
                       handleAddTodo={ this.handleAddTodo }
                       handleActivateAll={this.handleActivateAll} />
              <TodoList todos={ todos }
                        handleToggle={ this.handleToggle } 
                        handleRemoveTodo={ this.handleRemoveTodo } />        
              <InfoBox isAnyCompleted={ this.state.isAnyCompleted } 
                       todos={ todos }
                       leftTOdoCount={ this.state.leftTOdoCount }
                       handleFilter={ this.handleFilter }
                       handleClearcompleted={ this.handleClearcompleted } />
          </div>
          
      );
  }
}
