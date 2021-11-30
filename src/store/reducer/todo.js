const initialState = {
    todos: [],
    filter: 'all',
}


const todo = (state = initialState, action) => {
    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, {
                    title: action.title,
                    completed: false,
                    id: Math.random()
                }]
            }
        case 'deleteTodo':
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.id)
            }
        case 'completeAll':
            return {
                ...state,
                todos: state.todos.map(item => ({ ...item, completed: !item.completed }))
            }
        case 'clearCompleted':
            return {
                ...state,
                todos: state.todos.filter(item => !item.completed)
            }
        case 'setFilter':
            return {
                ...state,
                filter: action.filterType
            }

        case 'completeTodo':
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (item.id === action.id) {
                        return { ...item, completed: !item.completed }
                    } else {
                        return item
                    }
                })
            }
        case 'setFilter':
            return {
                ...state,
                filter: action.filterType
            }

        default:
            return state
    }
}


export default todo;