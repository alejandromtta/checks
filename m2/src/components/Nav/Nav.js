import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom'
function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
     <Link to ='/'>
     <span>TODOS</span>
     </Link>
     <Link to ='/add'>
     <span>Add Todo</span>
     </Link>
    </nav>
  )
};

export default Nav;