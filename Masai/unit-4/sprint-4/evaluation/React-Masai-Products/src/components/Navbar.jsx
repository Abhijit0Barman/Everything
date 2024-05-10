import { Link, Flex, Spacer, HStack, Heading, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

function Navbar() {
  // import the chakra UI components from the chakra UI library, and remove the following.
  // const Flex = () => <div></div>;
  // const HStack = () => <div></div>;
  // const Spacer = () => <div></div>;
  // const Heading = () => <div></div>;

  const { authDetails, login, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
  }
  return (
    <Flex
      data-cy="navbar"
      align="center"
      backgroundColor="gray.900"
      color="gray.50"
      p={4}
    >
      <Heading as="h3" size="lg">
        Masai Products
      </Heading>
      <Spacer />
      <HStack spacing="24px">
        {/* Add chakra-ui link here */}
        {/* <Link to="/">HOME</Link> */}
        <Link as={ReactRouterLink} to="/">HOME</Link>

        {!authDetails.isAuth ? (
          <Link as={ReactRouterLink} to="/login">LOGIN</Link>
        ) : (
          <Button onClick={handleLogout}>LOGOUT</Button>
        )}
      </HStack>
    </Flex>
  );
}

export default Navbar;
