import { useEffect, useState } from "react";

const Effect = () => {
  const [state, setState] = useState("Posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [state]);
  return (
    <div className="">
      <div>
        <button onClick={() => setState("posts")}>Posts</button>
        <button onClick={() => setState("comments")}>comments</button>
        <button onClick={() => setState("users")}>users</button>
      </div>
      <h1 className="">{state}</h1>
      <div>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </div>
  );
};

export default Effect;
