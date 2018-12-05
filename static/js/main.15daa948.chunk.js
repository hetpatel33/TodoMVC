(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){},12:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(9),l=n.n(r),i=(n(17),n(2)),c=n(3),d=n(5),s=n(4),u=n(6),m=(n(19),n(1),function(e){var t=e.onEnter,n=e.placeholder;return a.a.createElement("input",{type:"text",className:"todo-bar",placeholder:n,onKeyDown:function(e){var n=e.target.value.trim();13===e.which&&n&&(t(n),e.target.value="")}})}),p=function(e){var t=e.onEnter,n=e.onActivateAll;return a.a.createElement("div",{className:"todo-bar-container"},a.a.createElement("label",{className:"activate-all",onClick:n},"\u276f"),a.a.createElement(m,{onEnter:t,placeholder:"What needs to be done?"}))},h=function(e){var t=e.todo,n=e.onToggle,o=e.onRemove;return a.a.createElement("li",{className:t.completed?"todo-item todo-completed":"todo-item"},a.a.createElement("label",{className:"todo-label"},t.text,a.a.createElement("input",{type:"checkbox",checked:t.completed,value:t.id,onChange:n}),a.a.createElement("span",{className:"checkmark"})),a.a.createElement("button",{className:"remove-button fr",onClick:function(){return o(t.id)}}))},f=n(7),v=n(11),g={pushTodo:function(e,t){return Object(v.a)(e).concat([t])},getRemainingTodos:function(e){return e.filter(function(e){return!e.completed})},getCompletedTodos:function(e){return e.filter(function(e){return e.completed})},getRemainingCount:function(e){return this.getRemainingTodos(e).length},toggleTodo:function(e,t){return e.map(function(e){return e.id===t?Object(f.a)({},e,{completed:!e.completed}):e})},removeTodo:function(e,t){return e.filter(function(e){return e.id!==t})},updateCompletedProperty:function(e,t){return e.map(function(e){return Object(f.a)({},e,{completed:t})})}},T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).handleToggle=function(e){var t=e.target.value,o=g.toggleTodo(n.props.todos,t);n.props.onStateUpdate(o)},n.handleRemove=function(e){var t=g.removeTodo(n.props.todos,e);n.props.onStateUpdate(t)},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos.map(function(t){return a.a.createElement(h,{key:t.id,todo:t,onToggle:e.handleToggle,onRemove:e.handleRemove})});return a.a.createElement("ul",{className:"todo-list"},t)}}]),t}(o.PureComponent),C=[{id:"ALL_TODO",text:"All"},{id:"ACTIVE_TODO",text:"Active"},{id:"COMPLETE_TODO",text:"Completed"}],E=function(e){var t=e.activeFilter,n=e.onFilterUpdate,o=e.onClearcompleted,r=e.remainingTodoCount,l=e.showClearCompleted,i=C.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("button",{className:t===e.id?"todo-btn todo-active":"todo-btn",onClick:function(){return n(e.id)}},e.text))});return a.a.createElement("footer",{className:"infoBox"},a.a.createElement("span",{className:"fl"},r," items left "),a.a.createElement("ul",{className:"filter-btns"},i),l&&a.a.createElement("button",{className:"clear-btn",onClick:o},"Clear completed"))},b=n(10),O=n.n(b),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(s.a)(t).call(this,e))).handleActivateAll=function(){var e=!!g.getRemainingCount(n.state.todos),t=g.updateCompletedProperty(n.state.todos,e);n.handleTodoListUpdate(t)},n.handleAddTodo=function(e){var t={id:O()(),completed:!1,text:e},o=g.pushTodo(n.state.todos,t);n.handleTodoListUpdate(o)},n.handleTodoListUpdate=function(e){n.setState({todos:e})},n.handleClearcompleted=function(){var e=g.getRemainingTodos(n.state.todos);n.handleTodoListUpdate(e)},n.handleFilterUpdate=function(e){n.setState({activeFilter:e})},n.state={todos:[],activeFilter:"ALL_TODO"},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getFilteredTodos",value:function(e,t){switch(t){case"ACTIVE_TODO":return g.getRemainingTodos(e);case"COMPLETE_TODO":return g.getCompletedTodos(e);default:return e}}},{key:"shouldShowClearCompleted",value:function(){return this.state.todos.length>0&&g.getRemainingCount(this.state.todos)!==this.state.todos.length}},{key:"render",value:function(){var e=this.state.todos;return a.a.createElement("div",{className:"content"},a.a.createElement(p,{onEnter:this.handleAddTodo,onActivateAll:this.handleActivateAll}),a.a.createElement(T,{todos:this.getFilteredTodos(e,this.state.activeFilter),onStateUpdate:this.handleTodoListUpdate}),a.a.createElement(E,{activeFilter:this.state.activeFilter,onFilterUpdate:this.handleFilterUpdate,onClearcompleted:this.handleClearcompleted,remainingTodoCount:g.getRemainingCount(this.state.todos),showClearCompleted:this.shouldShowClearCompleted()}))}}]),t}(o.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"app-container"},a.a.createElement("div",{className:"header"},"todos"),a.a.createElement(w,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.15daa948.chunk.js.map