import "./App.css";
import { Button, Stack, Center } from '@chakra-ui/react'
import { useState } from "react";
import Form from "./Components/Form/Form";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
	const [state, setState] = useState(false)
	// TODO: Remove below const and instead import them from chakra
	// const Button = () => <div />;
	// const Stack = () => <div />;
	// const Center = () => <div />;

	return (
		<Stack spacing={5} p={5} className="App">
			<Center>
				<Button onClick={()=>setState(!state)} colorScheme={"messenger"} width="150px" className="toggleForm">
					{/* Toggle button between form and dashboard */}
					{state ? "View Dashboard" : "View Form"}
				</Button>
			</Center>
			{/* on toggle conditions show component here */}
			{state ? <Form /> : <Dashboard />}
		</Stack>
	);
}

export default App;
