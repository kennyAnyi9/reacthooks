import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(() => {
    return 0;
  }); //use function to handle previous state if you do not want it to run everytime
  return (
    <div>
      <div className="card">
        <button onClick={(n) => n}>+</button>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount((n) => n - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default State;
