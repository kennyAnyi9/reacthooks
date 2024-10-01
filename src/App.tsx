import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    return 0;
  }); //use function to handle previous state if you do not want it to run everytime
  return (
    <>
      <h1>Learning React Hooks</h1>
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
    </>
  );
}

export default App;
