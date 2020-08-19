import React from 'react';

import './show_todo.component.css';

import TodoItem from '../todo_item/todo_item.component';

export default function ({ todos, deleteTodo, editTodo }) {
    var content = todos.length === 0 ? "No Todos To Display" : todos.map(function (todo) {
        return <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo} editTodo={editTodo} />
    });
    return (
        <div className="show_todo">{content}</div>
    );
}