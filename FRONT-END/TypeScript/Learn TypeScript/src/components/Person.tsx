import { PersonProps } from "./Person.types";

// type PersonProps = {
//   objName: {
//     first: string;
//     last: string;
//   };
// };

export const Person = (props: PersonProps) => {
  return <div>{`${props.objName.first} ${props.objName.last}`}</div>;
};
