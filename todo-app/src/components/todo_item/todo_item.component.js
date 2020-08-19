import React from 'react';

import './todo_item.component.css';

export default function ({ todo, deleteTodo, editTodo }) {
    return (
        <div className="todo_item_wrapper">
            <div className="todo_item_wrapper_content">
                <h3>{todo.title}</h3>
                <h5>{todo.description}</h5>
            </div>
            <div className="todo_item_wrapper_actions">
                <button className="btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button className="btn" onClick={() => editTodo(todo.id)}>Edit</button>
            </div>
        </div>
    );
}

