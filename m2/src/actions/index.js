// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 1

export const addTodo = (payload) => {
    return {
    type: 'AddTodo',
    payload: {
        title: payload.title,
        description: payload.description,
        place: payload.place,
        date: payload.date,
        status: 'Todo',
        id: todoId

    }
}
}

export const removeTodo = (id) => {
   return {
        type: 'RemoveTodo',
        payload: id
      }
}

export const toInProgress = (payload) => {
    return {
        type: 'ToInProgress',
        payload: payload
        }
}

export const toDone = (payload) => {
    return {
        type: 'ToDone',
        payload: payload
      }
}