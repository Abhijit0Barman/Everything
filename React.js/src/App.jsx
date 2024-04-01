import "./App.css";

//Component
function Button(props) {
  const { text, onClick } = props;
  return <button onClick={onClick}>{text}</button>;
}

//JSX  or Javascript XML
function Header(props) {
  const { text } = props;
  return <h1>{text}</h1>;
}

export default function App() {
  return (
    <>
      <div className="App">
        <Header text="Counter 0" />
        <Button onClick={() => console.log(`Add`)} text="ADD" />
        <Button onClick={() => console.log(`Reduce`)} text="REDUCE" />
      </div>
    </>
  );
}
