import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div className="count">
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
