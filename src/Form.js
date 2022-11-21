import React from "react";

export default function Form() {
  function clickHandler() {
    return null;
  }

  return (
    <form>
      <input type="text" id="typeNewTodo" name="tnewtodo"
        placeholder="Type a new todo"></input>
      <button className="formButton" onClick={clickHandler}>
        Add Todo
      </button>
    </form>
  );
}
