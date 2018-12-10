import React from "react";
import Filters from "../constants/filters";
import "./styles.css";

const InfoBox = ({
  activeFilter,
  onFilterUpdate,
  onClearcompleted,
  remainingTodoCount,
  showClearCompleted
}) => {
  const todoFilters = Filters.map(filter => {
    return (
      <li key={filter.id}>
        <button
          className={
            activeFilter === filter.id ? "todo-btn todo-active" : "todo-btn"
          }
          onClick={() => onFilterUpdate(filter.id)}
        >
          {filter.text}
        </button>
      </li>
    );
  });

  return (
    <footer className="infoBox">
      <span className="fl">{remainingTodoCount} items left </span>
      <ul className="filter-btns">{todoFilters}</ul>
      {showClearCompleted && (
        <button className="clear-btn" onClick={onClearcompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default InfoBox;
