import React from 'react';
import Todo from '../Todo/Todo'
import redux from 'redux';
export function Todos({status}) {
  return (
    <div >
      {}
<span>{status}</span>
    </div>
  )
};

export default Todos;