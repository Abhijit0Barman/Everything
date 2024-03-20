import { MouseEvent } from "react";

type ButtonProps = {
  //   handleClick: () => void;
  //   handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  //   return <button onClick={props.handleClick}>Click</button>;
  return (
    <button onClick={(event) => props.handleClick(event, 1000001)}>Click</button>
  );
};
