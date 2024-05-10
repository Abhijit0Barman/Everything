import { Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justify="space-between" data-cy="navbar">
      <Text data-cy="logo">Chakra UI</Text>
      {/* Add hamburger icon and onClick handler to open the drawer */}
    </Flex>
  );
};

export default Navbar;
