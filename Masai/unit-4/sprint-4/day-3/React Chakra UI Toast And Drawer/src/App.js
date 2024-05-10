import { useState } from "react";
import { ChakraProvider, extendTheme, useToast } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ChakraDrawer from "./ChakraDrawer";
import ChakraModal from "./ChakraModal";

// Extend Chakra UI theme if needed

const theme = extendTheme({
  // Add your custom theme configurations here
});

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const toast = useToast();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleLoginClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleLoginFormSubmit = (formData) => {
    // Perform form submission and authentication using reqres.in
    // Show toast based on login success/failure
    // Example:
    if (formData.email === "example@example.com" && formData.password === "password") {
      toast({
        title: "Login Successful.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login Failed.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    handleModalClose();
  };

  return (
    <ChakraProvider theme={theme}>
      <Navbar onHamburgerClick={handleDrawerOpen} onLoginClick={handleLoginClick} />
      <ChakraDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
      <ChakraModal isOpen={isModalOpen} onClose={handleModalClose} onLogin={handleLoginFormSubmit} />
      {/* Add your page content here */}
    </ChakraProvider>
  );
};

export default App;
