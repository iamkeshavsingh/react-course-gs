import React, { Component } from 'react';

import './todo.container.css';

import TodoCreate from '../../components/todo_form/todo_create/todo_create.component';
import TodoEdit from '../../components/todo_form/todo_edit/todo_edit.component';
import ShowTodo from '../../components/show_todo/show_todo.component';
import todo_helper from '../../util/todos';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            editMode: {
                isEdit: false,
                todo: null
            }
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.resetEdit = this.resetEdit.bind(this);
    }

    handleAdd({ title, description }) {

        var { isEdit, todo } = this.state.editMode;
        var newTodo, newTodos;

        if (isEdit) {
            newTodo = todo_helper.createNewTodo(todo.id, title, description);
            var idx = this.state.todos.findIndex(myTodo => myTodo.id === todo.id);

            newTodos = [...this.state.todos];
            newTodos[idx] = newTodo;
        }
        else {
            newTodo = todo_helper.createNewTodo(todo_helper.getId(this.state.todos), title, description);
            newTodos = [...this.state.todos, newTodo];
        }

        this.setState({
            todos: newTodos,
            editMode: {
                isEdit: false,
                todo: null
            }
        });
    }

    handleDelete(todoId) {
        var newTodos = this.state.todos.filter(function (todo) { return todo.id !== todoId });
        this.setState({
            todos: newTodos
        });
    }


    resetEdit() {
        this.setState({
            ...this.state,
            editMode: {
                isEdit: false,
                todo: null
            }
        });
    }

    handleEdit(todoId) {
        var todo = todo_helper.getTodo(this.state.todos, todoId);
        this.setState({
            ...this.state,
            editMode: {
                isEdit: true,
                todo: todo
            }
        });
    }

    render() {
        var { isEdit, todo } = this.state.editMode;
        return (
            <div className="todo_container">
                {!isEdit ? (
                    <TodoCreate submit={this.handleAdd} />
                ) : (
                        <TodoEdit isEdit resetEdit={this.resetEdit} todo={todo} submit={this.handleAdd} />
                    )}
                <ShowTodo todos={this.state.todos} deleteTodo={this.handleDelete} editTodo={this.handleEdit} />
            </div>
        );
    }
}


export default Todo;