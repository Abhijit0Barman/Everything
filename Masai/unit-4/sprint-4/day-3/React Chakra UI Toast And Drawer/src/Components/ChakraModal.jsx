import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";

const ChakraModal = ({ isOpen, onClose, onLogin }) => {
  // Add form state and form submission handler

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login form submission and authentication using reqres.in
    // Show toast based on login success/failure
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            {/* Add email and password input fields */}
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="blue">
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ChakraModal;
