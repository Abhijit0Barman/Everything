import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { CounterUseReducer } from "./components/state/CounterUseReducer";
import { LoggedIn } from "./components/state/LoggedIn";
import { TypeAsertion } from "./components/state/TypeAsertion";
import { User } from "./components/state/User";
import { User as UserUser } from "./components/context/User";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";

function App() {
  const obj = {
    first: "Abhijit",
    last: "Barman",
  };

  const arr = [
    {
      first: "1st name",
      last: "Barman",
    },
    {
      first: "2nd name",
      last: "Barman",
    },
    {
      first: "3rd name",
      last: "Barman",
    },
  ];
  return (
    <>
      <Greet name="Barman" isLoggedIn={true} />
      {/*Normal Passing or optional  props*/}
      <hr />
      <Person objName={obj} /> {/*Object Passing*/}
      <hr />
      <PersonList arrName={arr} /> {/*Array Passing*/}
      <hr />
      <Status status="success" />
      {/*"success"|"loading"|"error"  union of string literals*/}
      <hr />
      <Heading>Dynamic Heading</Heading>
      {/*children Passing*/}
      <hr />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
        {/*ReactNode component children Passing*/}
      </Oscar>
      <hr />
      {/* <Button handleClick={() => confirm("button clicked")} /> */}
      {/* <Button handleClick={(event) => console.log("button clicked", event)} /> */}
      <Button
        handleClick={(event, id) => console.log("button clicked", event, id)}
      />
      {/*Click Event passing*/}
      <hr />
      <Input
        handleChange={(event) => {
          console.log(event);
        }}
        value=""
      />
      {/*Change Event  passing*/}
      <hr />
      <Container styles={{ border: "1px solid red", padding: "1rem" }} />
      {/*CSS passing*/}
      <hr />
      <LoggedIn />
      <hr />
      <User />
      <hr />
      <TypeAsertion />
      <hr />
      <CounterUseReducer />
      <hr />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <hr />
      <UserContextProvider>
        <UserUser />
      </UserContextProvider>
      <hr />
      <DomRef />
      [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
      <MutableRef />
      <hr />

    </>
  );
}

export default App;
