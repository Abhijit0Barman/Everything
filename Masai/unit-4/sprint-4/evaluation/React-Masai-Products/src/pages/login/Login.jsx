import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { Container, Input, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { loginPostRequest } from "./api"

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { login, logout, authDetails } = useContext(AuthContext);
  // import the chakra UI components from the chakra UI library, and remove the following.
  // const Container = () => <div></div>;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    loginPostRequest(formState)
      .then((res) => {
        login(res?.data?.token)
        console.log(res?.data)
        setLoading(false)
        navigate(`/`)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  };
  const { email, password } = formState;

  return (
    <Container data-cy="login" maxW="container.md" mt={4}>
      {/* Add form here */}
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input
            name="email"
            placeholder="Email"
            size="lg"
            onChange={handleChange}
            value={email}
          />
          <Input
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            size="lg"
          />
          <Button
            type="submit"
            colorScheme="teal"
            size="md"
            isLoading={loading}
          >
            LOGIN
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default Login;
