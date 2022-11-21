/* import React from "react";

export default function List() {

  return (<>
          <div>
      <input type={"checkbox"} id="firstLine" name="firstLine"></input>
      <label for="firstLine">Learn React</label>
    </div><div>
        <input type={"checkbox"} id="firstLine" name="firstLine"></input>
        <label for="firstLine">Be Awesome!</label>
      </div>
 </> );
}
*/

// --------------------------------------------------------------------------------------- //

import React, { useState } from "react";

export default function TodoList() {
  const initialTodos = ["My first todo", "My second todo"];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <>
      <p className="todoTitle">Todos</p>
      <ul className="todoList">
        {todos.map((todo) => (
          <li key={todo}>
            <input type="checkbox" onClick={() => setTodos(todos)} /> {todo}
          </li>
        ))}
      </ul>
    </>
  );
}  
