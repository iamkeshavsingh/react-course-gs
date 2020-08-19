function createNewTodo(id, title, description) {
    return {
        id: id,
        title: title,
        description: description
    };
}

function getTodo(todos, todoId) {
    todoId = Number(todoId);
    return {
        ...todos.find(function (todo) {
            return todo.id === todoId
        })
    };
}

function getId(todos) {
    if (todos.length === 0) return 1;
    return todos[todos.length - 1].id + 1;
}

export default {
    createNewTodo,
    getTodo,
    getId
};