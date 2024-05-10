import { useState } from "react";
import Button from "../common/button/Button";
import Container from "../common/container/Container";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => { setCount(0) };

  return (
    // <div style={{border:"1px solid black", textAlign:"center",margin:"20px",padding:"20px"}}>
    <>
      <Container>
        {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
        <h1>Count : {count}</h1>
        <div>
          {/* Add 3 buttons for INC, DEC, RESET using Button component */}
          <Button handle={increment} >INC</Button>
          <Button handle={decrement} >DEC</Button>
          {/* <Button handle={reset} >RESET</Button> */}
          <Button handle={reset} children={"RESET"} />
        </div>
      </Container>
    </>
  );
}

export default Counter;
