import React from 'react';
import Todos from '../Todos/Todos'
 function Home() {
  return (
    <div>
      <Todos status="Todo"/>
      <Todos status="InProgress"/>
      <Todos status="Done"/>
    </div>
  )
};

export default Home;