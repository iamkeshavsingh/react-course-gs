import React from 'react';

import './todo_create.component.css';

import TodoFormHOC from '../../../hoc/todo_form/todo_form.hoc';

function TodoForm({ title, description, change, submit }) {
    return (
        <div className="todo_form_wrapper">
            <form onSubmit={submit} className="todo_form">
                <input
                    className="todo_form_input"
                    type="text" id="title"
                    name="title"
                    value={title}
                    onChange={change}
                />
                <input
                    className="todo_form_input"
                    type="text" id="description"
                    name="description"
                    value={description}
                    onChange={change}
                />
                <button type="submit" className="todo_form_submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoFormHOC(TodoForm);