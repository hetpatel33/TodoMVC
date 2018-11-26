import React, { Component } from 'react'
import Actions from '.././constants/actions';
import './styles.css';

export default class InfoBox extends Component {
    
    activeState = Actions.ALL_TODO;

    handleClick = (type) => {
        this.activeState = type;
        this.props.handleFilter(type);
    }
    
    render() {
        return (
            <footer className="infoBox">
                <span className="fl">{ this.props.leftTOdoCount } items left </span>
                <ul className="filter-btns">
                    <li><button className={ this.activeState === Actions.ALL_TODO ? "todo-btn todo-active" : "todo-btn"}
                                onClick={ () => this.handleClick(Actions.ALL_TODO) }>All</button></li>
                    <li><button className={ this.activeState === Actions.ACTIVE_TODO ? "todo-btn todo-active" : "todo-btn"} 
                                onClick={ () => this.handleClick(Actions.ACTIVE_TODO) }>Active</button></li>
                    <li><button className={ this.activeState === Actions.COMPLETE_TODO ? "todo-btn todo-active" : "todo-btn"}
                                onClick={ () => this.handleClick(Actions.COMPLETE_TODO) }>Completed</button></li>
                </ul>
                {this.props.isAnyCompleted &&
                    <button className="clear-btn" onClick={ () => this.props.handleClearcompleted(this.activeState) }>Clear completed</button>
                }
            </footer>
        );
    }
}