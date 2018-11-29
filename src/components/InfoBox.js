import React from 'react'
import Actions from '.././constants/actions';
import './styles.css';

const InfoBox = ({activeState, onFilterUpdate, onClearcompleted, getRemainingCount, showClearCompleted}) => {
    return (
        <footer className="infoBox">
            <span className="fl">{ getRemainingCount() } items left </span>
            <ul className="filter-btns">
                <li><button className={ activeState === Actions.ALL_TODO ? "todo-btn todo-active" : "todo-btn"}
                            onClick={ () => onFilterUpdate(Actions.ALL_TODO) }>All</button></li>
                <li><button className={ activeState === Actions.ACTIVE_TODO ? "todo-btn todo-active" : "todo-btn"} 
                            onClick={ () => onFilterUpdate(Actions.ACTIVE_TODO) }>Active</button></li>
                <li><button className={ activeState === Actions.COMPLETE_TODO ? "todo-btn todo-active" : "todo-btn"}
                            onClick={ () => onFilterUpdate(Actions.COMPLETE_TODO) }>Completed</button></li>
            </ul>
            {showClearCompleted() &&
                <button className="clear-btn" onClick={ onClearcompleted }>Clear completed</button>
            }
        </footer>
    )
}

export default InfoBox;
