import React, { Component } from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="header">todos</div>
        <TodoContainer />
      </div>
    );
  }
}
