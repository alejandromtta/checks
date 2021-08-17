
const initialState = [];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, action) => {
  switch(action.type) {
    // Aca va tu codigo;
    case 'AddTodo':
      let uwu = action.payload;
      uwu.id = state.length + 1;
      return  [...state, uwu]; 
        
        
      case 'RemoveTodo':
        for(let i in state) {
          if(state[i].id == action.payload) {
            state.splice(i,1)
        
          }
        }
        return state;
        case 'ToInProgress':
        
           for(let i in state) {
            if(state[i].id == action.payload) {
              state[i].status = 'InProgress'
          
            }
          }
          return state;
          case 'ToDone':
            for(let i in state) {
              if(state[i].id == action.payload) {
                state[i].status = 'Done'
            
              }
            }
            return state;
default:
  return state;
  }
}

export default todos;
