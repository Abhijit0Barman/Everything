import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Button } from "@chakra-ui/react";

const ChakraDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Button data-cy="home">Home</Button>
          <Button data-cy="gallery">Gallery</Button>
          <Button data-cy="login">Login</Button>
          <Button data-cy="signup">SignUp</Button>
          <Button data-cy="about">About Us</Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ChakraDrawer;
