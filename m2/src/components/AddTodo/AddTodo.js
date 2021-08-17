import React, {useState} from 'react';
import {addTodo, removeTodo, toInProgress, toDone} from '../../actions/index'
import { connect } from 'react-redux';
// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo(props) {
  const [input,setInput] = React.useState({
    'title': '',
    'description': '',
    'place': '',
    'date': '',
    })

    const handleInputChange = function(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    }
    console.log(props)
  return (
    <div>
      <form onSubmit={(e) => {
      e.preventDefault(); mapDispatchToProps(input)}}>
        <label>Title</label>
        <input type="text" name='title' onChange={handleInputChange} value={input.title}/>
        
        <label>Description</label>
        <textarea name='description' onChange={handleInputChange} value={input.description}/>
    
        
        <label>Place</label>
        <input type="text" name='place' onChange={handleInputChange} value={input.place}/>
        
        <label>Date</label>
        <input type="date" name='date'onChange={handleInputChange} value={input.date}/>
        
        <button type="submit" >submit</button>
      </form>
    </div>
  )
};
const mapDispatchToProps = (dispatch)=>{
return addTodo(dispatch)
}

console.log(mapDispatchToProps)

export default connect(null,mapDispatchToProps)(AddTodo)