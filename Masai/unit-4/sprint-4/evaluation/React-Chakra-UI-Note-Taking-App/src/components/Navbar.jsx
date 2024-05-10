import React, { useState } from 'react'
import { Spacer, HStack, Box, Flex, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Heading, useDisclosure, } from '@chakra-ui/react'
import AddNotes from './AddNotes';

const Navbar = () => {
  // import the chakra UI components from the chakra UI library , and remove the following.

  const { isOpen, onOpen, onClose } = useDisclosure()
  const HStack = () => <div />;
  const Box = () => <div />;
  const Heading = () => <div />;
  const Spacer = () => <div />;
  const Button = () => <div />;

  return (
    <Flex justify={`space-between`} p={4}>

      {/* <HStack borderBottom="1px solid gray" p={5} data-cy="navbar">
        <Box display="flex" justifyContent="center" alignItems="center"> */}
      <Heading as="h3" fontSize="3xl">
        Note App
      </Heading>
      {/* </Box> */}
      <Spacer />
      <Button data-cy="drawer_openBtn" colorScheme="blue" onClick={onOpen}>
        Create Note
      </Button>
      {/* Import Drawer Here and it should be open when above Button in clicked*/}
      <Drawer isOpen={isOpen} placement='right' onClose={onclose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Create Note</DrawerHeader>
          <DrawerBody>
            <AddNotes onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* </HStack> */}
    </Flex>
  );
};

export default Navbar;
