import React from "react";

export default function List() {
  const todos = ["My first todo", "My second todo"];

  return (
    <>
      {todos.map((todo) => (
        <>
          <div>
            <input type={"checkbox"} id="firstLine" name="firstLine"></input>
            <label for="firstLine">Learn React</label>
          </div>
          <div>
            <input type={"checkbox"} id="firstLine" name="firstLine"></input>
            <label for="firstLine">Be Awesome!</label>
          </div>
        </>
      ))}
    </>
  );
}
