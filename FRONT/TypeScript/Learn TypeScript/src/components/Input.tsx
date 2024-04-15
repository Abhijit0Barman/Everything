import { ChangeEvent } from "react";

type InputProps = {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    // <input type="text" onChange={props.handleChange} value={props.value} />
    <input type="text" onChange={handleInputChange} value={props.value} />
  );
};

//either you can pass and received here OR you can define here itself ChangeEventFunction
