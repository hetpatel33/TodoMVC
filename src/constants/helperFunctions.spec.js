'use strict';
import Helpers from './helperFunctions';

describe('helperFunctions', () => {
    describe('pushTodo', () => {
        test('adds new todo to the todos list', () => {
            const newTodo = {foo: 'bar'};
            expect(Helpers.pushTodo([], newTodo)).toEqual([{foo: 'bar'}]);
        });
    });
    
    describe('getRemainingTodos', () => {
        test('gets list of remainging todos', () => {
            const todos = [
                {id:1, completed: false},
                {id:2, completed:true},
            ];
            expect(Helpers.getRemainingTodos(todos)).toEqual([{id:1, completed:false}]);
        });
    });
    
    describe('getCompletedTodos', () => {
        test('gets list of completed todos', () => {
            const todos = [
                {id:1, completed: false},
                {id:2, completed:true},
            ];
            expect(Helpers.getCompletedTodos(todos)).toEqual([{id:2, completed:true}]);
        });
    });
    
    describe('getRemainingCount', () => {
        test('gets count of remaining todos', () => {
            const todos = [
                {id:1, completed: false},
                {id:2, completed:true},
            ];
            expect(Helpers.getRemainingCount(todos)).toEqual(1);
        });
    });
    
    describe('toggleTodo', () => {
        test('toggle the competed value of given todo', () => {
            const todos = [
                {id:1, completed: false},
                {id:2, completed:true},
            ];
            expect(Helpers.toggleTodo(todos, 1)).toEqual(
                [
                    {id:1, completed: true},
                    {id:2, completed:true},
                ]
            );
        });
    });
    
    describe('removeTodo', () => {
        test('removes given todo from the todos list', () => {
            const todos = [
                {id:1, completed: false},
                {id:2, completed:true},
            ];
            expect(Helpers.removeTodo(todos, 1)).toEqual([{id:2, completed:true}]);
        });
    });
    
    describe('updateCompletedProperty', () => {
        test('updates all todos to completed', () => {
            const todos = [
                {id:1, completed: false},
                {id:2, completed:true},
            ];
            expect(Helpers.updateCompletedProperty(todos, true)).toEqual(
                [
                    {id:1, completed: true},
                    {id:2, completed:true},
                ]
            );
        });
    });  
});
