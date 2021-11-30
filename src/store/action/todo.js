const addTodo = (title) => {
    return {
        type: 'addTodo',
        title
    }
}

const deleteTodo = (id) => {
    return {
        type: 'deleteTodo',
        id
    }
}

const completeAll = () => {
    return {
        type: 'completeAll',
    }
}
const completeTodo = (id) => {
    return {
        type: 'completeTodo',
        id
    }
}

const clearCompleted = () => {
    return {
        type: 'clearCompleted',
    }
}

const setFilter = (filterType) => {
    return {
        type: 'setFilter',
        filterType
    }
}







export {
    addTodo,
    deleteTodo,
    completeAll,
    completeTodo,
    clearCompleted,
    setFilter
}