import { useThrottle } from "../hooks/useThrottle";

const Throttling = () => {
  const throttle = useThrottle();

  const apiCall = () => {
    console.log("Api request made...");
  };

  return (
    <div>
      <button onClick={() => throttle(apiCall)}>Click Throttle</button>
    </div>
  );
};

export default Throttling;
