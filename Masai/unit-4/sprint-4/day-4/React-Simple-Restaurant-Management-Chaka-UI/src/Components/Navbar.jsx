// function Navbar() {
//   // import the chakra UI components from the chakra UI library , and remove the following.
//   const Link = ()=><div></div>;
//   const Flex = ()=><div></div>;
//   const Spacer = ()=><div></div>;

//   return (
//     <Flex alignItems="center" bgColor="pink" p={4} data-testid="navbar">
//       {/* add link for Home page */}
//       <Spacer />
//       {/* add link for Add Restaurant */}
//     </Flex>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Link as ChakraLink } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box as="nav" p={4} bg="blue.500" color="white">
      <ChakraLink as={Link} to="/" mr={4}>
        Home
      </ChakraLink>
      <ChakraLink as={Link} to="/add-restaurant">
        Add Restaurant
      </ChakraLink>
    </Box>
  );
};

export default Navbar;
