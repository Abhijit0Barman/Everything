import React, { useState } from 'react'
import { VStack, Heading, Input, Textarea, Button } from '@chakra-ui/react'
import axios from 'axios'

const AddNotes = ({ onClose }) => {
  const [title, setTitle] = useState(``);
  const [description, setDescription] = useState(``);
  // import the chakra UI components from the chakra UI library , and remove the following.

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/notes`, {
        title,
        description,
        status: `pending`,
      })
      setTitle(``)
      setDescription(``)
      onClose()
    } catch (error) {
      console.log(error);
    }
  }

  const VStack = () => <div />;

  return <VStack></VStack>;
};

export default AddNotes;
