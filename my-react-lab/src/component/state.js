import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease} style={{ margin: "0 10px" }}>
        Decrease
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
