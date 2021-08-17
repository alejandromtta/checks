import React from 'react'
import './App.css';
import {Route, BrowserRouter, Link} from 'react-router-dom'
import Home from './components/Home/Home.js'
import Todo from './components/Todo/Todo.js'
import TodoDetail from './components/TodoDetail/TodoDetail';
import AddTodo from './components/AddTodo/AddTodo'
import Nav from './components/Nav/Nav';
// En este componente deberias cargar tus rutas.
export function App() {
  return (
    <div clasName='App'>
    <Route path ='/' component={Nav}/>
<Route exact  path ='/' component={Home}/>
<Route path ='/add'  component={AddTodo}/>
<Route path ='/edit/:id' component={TodoDetail}/>
     </div>

    
  );
}
export default App;
