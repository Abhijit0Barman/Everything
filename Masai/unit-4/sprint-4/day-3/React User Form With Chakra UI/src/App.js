import { useState, useReducer } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  Heading,
  FormLabel,
  Input,
  Select,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
} from "@chakra-ui/react";
import { UserRow } from "./UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "gender":
      return { ...state, gender: action.payload };
    case "role":
      return { ...state, role: action.payload };
    case "maritalStatus":
      return { ...state, maritalStatus: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Invalid action type");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, state]);
    dispatch({ type: "reset" });
  };

  return (
    <div className="App">
      <Heading as="h1">Login Form</Heading>
      <Box>
        <form data-testid="form-element" onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
            />

            <FormLabel>Gender</FormLabel>
            <Select
              name="gender"
              data-testid="gender-select"
              value={state.gender}
              onChange={(e) =>
                dispatch({ type: "gender", payload: e.target.value })
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer Not to Say">Prefer Not to Say</option>
            </Select>

            <FormLabel>Role</FormLabel>
            <Select
              name="role"
              data-testid="role-select"
              value={state.role}
              onChange={(e) =>
                dispatch({ type: "role", payload: e.target.value })
              }
            >
              <option value="FrontEnd Developer">FrontEnd Developer</option>
              <option value="BackEnd Developer">BackEnd Developer</option>
              <option value="FullStack Developer">FullStack Developer</option>
            </Select>

            <Checkbox
              name="maritalStatus"
              isChecked={state.maritalStatus}
              onChange={(e) =>
                dispatch({ type: "maritalStatus", payload: e.target.checked })
              }
            >
              Married
            </Checkbox>
            <Center>
              <Button variant="solid" type="submit">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>

      <Center>
        {submittedData.length > 0 ? (
          <TableContainer boxShadow="2xl">
            <Table
              data-testid="user-container"
              variant="striped"
              colorScheme="cyan"
              p={3}
            >
              <Thead>
                <Tr>
                  <Th>S.no</Th>
                  <Th>User</Th>
                  <Th>Gender</Th>
                  <Th>Role</Th>
                  <Th>Marital Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {submittedData.map((user, index) => (
                  <UserRow
                    key={index}
                    name={user.name}
                    gender={user.gender}
                    role={user.role}
                    maritalStatus={user.maritalStatus ? "married" : "unmarried"}
                    id={index + 1}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Heading as="h1" data-testid="no-user-container">
            no users found
          </Heading>
        )}
      </Center>
    </div>
  );
}

export default App;
