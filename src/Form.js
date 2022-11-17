import React from "react";
import Button from "./Button";

function Form(){
    return (
        <form>
          <input type="text" id="firstname" name="fname" placeholder="Type a new todo"></input>
          <Button />
        </form>
    )
}

export default Form