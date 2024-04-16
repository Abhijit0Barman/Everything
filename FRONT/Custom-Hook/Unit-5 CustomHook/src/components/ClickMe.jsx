import { useDebounce } from "../hooks/useDebounce";

const ClickMe = () => {
  const debounce = useDebounce();
  const handleClick = () => {
    console.log(`hello`);
  };
  return (
    <div>
      <button onClick={() => debounce(handleClick)}>Api Req</button>
    </div>
  );
};

export default ClickMe;
