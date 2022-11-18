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
    <ul>
      {todos.map((todo) => (
        <li>
          <input type="checkbox" /> {todo}
        </li>
      ))}
    </ul>
  );
}

console.log(TodoList)