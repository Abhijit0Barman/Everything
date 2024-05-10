import {
  VStack,
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  Image,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

function ProductItem({ title, id, brand, image, category, price }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // import the chakra UI components from the chakra UI library, and remove the following.
  // const VStack = () => <div></div>;
  return (
    <VStack
      data-cy="product-card"
      spacing="12px"
      align="center"
      border="1px solid black"
      p={4}
    >
      <Image src={image}></Image>
      <Text>Product : {title}</Text>
      <Text>Brand : {brand}</Text>
      <Text>Category : {category} </Text>
      <Text>Price : {price} </Text>
      <ButtonGroup gap="4">
        <Button colorScheme="gray" variant="outline" onClick={onOpen}>
          View in Modal
        </Button>
      </ButtonGroup>
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <ModalHeader>Product Name : {title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack align="left">
            <Image src={image} alt={title}></Image>
            <Text>Product : {title}</Text>
            <Text>Brand : {brand}</Text>
            <Text>Category : {category} </Text>
            <Text>Price : {price} </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>Close</Button>
        </ModalFooter>
      </Modal>
    </VStack>
  );
}

export default ProductItem;
