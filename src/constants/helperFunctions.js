const Helpers = {
    pushTodo: function(todos, newTodo) {
        return [
            ...todos,
            newTodo,
        ]
    },

    getRemainingTodos: function(todos) {
        return todos.filter(todo => !todo.completed);
    },

    getCompletedTodos: function(todos) {
        return todos.filter(todo => todo.completed);
    },

    getRemainingCount: function(todos) {
        return this.getRemainingTodos(todos).length;
    },

    toggleTodo: function(todos, id) {
        return todos.map(
            todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
    },

    removeTodo: function(todos, id) {
        return todos.filter(todo => todo.id !== id);
    },

    updateCompletedProperty : function(todos, updateValue) {
        return todos.map(todo => { 
            return {...todo, completed: updateValue}
        });
    },
}

export default Helpers;
