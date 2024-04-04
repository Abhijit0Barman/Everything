import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button, FormControl, FormLabel, Text, Select } from '@chakra-ui/react';

const InputModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [inputType, setInputType] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [fontSize, setFontSize] = useState('');
  const [fontWeight, setFontWeight] = useState('');
  const [missingFields, setMissingFields] = useState([]);

  useEffect(() => {
    if (initialData) {
      setInputType(initialData.inputType || '');
      setX(initialData.x || '');
      setY(initialData.y || '');
      setFontSize(initialData.fontSize || '');
      setFontWeight(initialData.fontWeight || '');
    }
  }, [initialData]);

  const handleSubmit = () => {
    const requiredFields = [inputType, x, y, fontSize, fontWeight];
    if (requiredFields.some(field => !field)) {
      setMissingFields(requiredFields.map((field, index) => field ? '' : index));
      return;
    }
    
    const inputData = {
      type: 'Input',
      inputType,
      x: parseInt(x),
      y: parseInt(y),
      fontSize: parseInt(fontSize),
      fontWeight: fontWeight
    };
    onSubmit(inputData);
    onClose();
  };

  const handleClose = () => {
    setInputType('');
    setX('');
    setY('');
    setFontSize('');
    setFontWeight('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Input</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={3} isInvalid={missingFields.includes(0)}>
            <FormLabel>Input Type</FormLabel>
            <Input value={inputType} onChange={(e) => setInputType(e.target.value)} />
          </FormControl>
          <FormControl mb={3} isInvalid={missingFields.includes(1)}>
            <FormLabel>X</FormLabel>
            <Input type="number" value={x} onChange={(e) => setX(e.target.value)} />
          </FormControl>
          <FormControl mb={3} isInvalid={missingFields.includes(2)}>
            <FormLabel>Y</FormLabel>
            <Input type="number" value={y} onChange={(e) => setY(e.target.value)} />
          </FormControl>
          <FormControl mb={3} isInvalid={missingFields.includes(3)}>
            <FormLabel>Font Size</FormLabel>
            <Input type="number" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
          </FormControl>
          <FormControl mb={3} isInvalid={missingFields.includes(4)}>
            <FormLabel>Font Weight</FormLabel>
            <Input type="text" value={fontWeight} onChange={(e) => setFontWeight(e.target.value)} />
          </FormControl>
          {missingFields.length > 0 && (
            <Text color="red.500">Please fill in all fields.</Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>Save Changes</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InputModal;
