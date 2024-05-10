import { useCounterLogic } from "../logic/counterLogic";

export const Counter2 = () => {
  const { count, handleAdd, handleReduce } = useCounterLogic();

  return (
    <div>
      <h1>Counter2: {count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};
