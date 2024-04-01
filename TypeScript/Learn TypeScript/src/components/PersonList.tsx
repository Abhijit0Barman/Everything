import { Obj } from "./Person.types";

type PersonListProps = {
  arrName: Obj[];
};
// type PersonListProps = {
//   arrName: {
//     first: string;
//     last: string;
//   }[];
// };

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.arrName.map((person, index) => {
        return (
          <div key={index}>
            {person.first} {person.last}
          </div>
        );
      })}
    </div>
  );
};
