import { Container, Center, Heading, Link } from '@chakra-ui/react'
import { Link as ReactRouterLink } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';

function Home() {
  // import the chakra UI components from the chakra UI library, and remove the following.
  // const Container = () => <div></div>;
  // const HStack = () => <div></div>;
  // const Center = () => <div></div>;
  const { authDetails, login, logout } = useContext(AuthContext)
  //  console.log(authDetails)
  return (
    <Container data-cy="home" maxW="container.xl">
      {/*Add Token */}
      {
        !authDetails.isAuth ? <>
          <Center>
            <Heading as="h3" my={4}>Welcome Guest</Heading>
          </Center>

        </> : <>
          <Center>
            <Heading as="h3" my={4}>Token : {authDetails.token}</Heading>
          </Center>

        </>
      }
      <Center>
        <Link
          as={ReactRouterLink}
          to="/products"
          color="green.500"
          fontSize="xl"
          fontWeight="bold"
        >
          Go to Products Page
        </Link>
      </Center>
    </Container>
  );
}

export default Home;