import "./App.css";
import Home from "./components/Home";
import {Stack} from "@chakra-ui/react"

function App() {
  // import the chakra UI components from the chakra UI library , and remove the following.
  const Stack = () => <div />;
  return (
    <Stack className="App">
      <Home />
    </Stack>
  )
}

export default App;
