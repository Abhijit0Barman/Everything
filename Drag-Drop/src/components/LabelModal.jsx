import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button, FormControl, FormLabel, Text } from '@chakra-ui/react';

const LabelModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [labelText, setLabelText] = useState('');
  const [xPosition, setXPosition] = useState('');
  const [yPosition, setYPosition] = useState('');
  const [fontSize, setFontSize] = useState('');
  const [fontWeight, setFontWeight] = useState('');
  const [missingFields, setMissingFields] = useState([]);

  useEffect(() => {
    if (initialData) {
      setLabelText(initialData.text || '');
      setXPosition(initialData.x || '');
      setYPosition(initialData.y || '');
      setFontSize(initialData.fontSize || '');
      setFontWeight(initialData.fontWeight || '');
    }
  }, [initialData]);

  const handleSubmit = () => {
    const requiredFields = [labelText, xPosition, yPosition, fontSize, fontWeight];
    if (requiredFields.some(field => !field)) {
      setMissingFields(requiredFields.map((field, index) => field ? '' : index));
      return;
    }
    
    const labelData = {
      type: 'Label',
      text: labelText,
      x: parseInt(xPosition),
      y: parseInt(yPosition),
      fontSize: parseInt(fontSize),
      fontWeight: fontWeight
    };
    onSubmit(labelData);
    onClose();
  };

  const handleClose = () => {
    setLabelText('');
    setXPosition('');
    setYPosition('');
    setFontSize('');
    setFontWeight('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Label</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={3} isInvalid={missingFields.includes(0)}>
            <FormLabel>Text</FormLabel>
            <Input value={labelText} onChange={(e) => setLabelText(e.target.value)} />
          </FormControl>
          <FormControl mb={3} isInvalid={missingFields.includes(1)}>
            <FormLabel>X</FormLabel>
            <Input type="number" value={xPosition} onChange={(e) => setXPosition(e.target.value)} />
          </FormControl>
          <FormControl mb={3} isInvalid={missingFields.includes(2)}>
            <FormLabel>Y</FormLabel>
            <Input type="number" value={yPosition} onChange={(e) => setYPosition(e.target.value)} />
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

export default LabelModal;
