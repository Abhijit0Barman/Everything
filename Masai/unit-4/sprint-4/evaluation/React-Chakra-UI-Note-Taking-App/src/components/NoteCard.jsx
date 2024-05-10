import { Box, Heading, Text, Button } from '@chakra-ui/react'
import axios from 'axios'

function NoteCard({ note }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/notes/${note.id}`)
    } catch (error) {
      console.log(error);
    }
  }
  // import the chakra UI components from the chakra UI library, and remove the following.
  const Box = () => <div />;
  return (
    <Box data-cy="note_card">
      {/* Show title and description here */}
      <Heading>
        <Text>{note.title}</Text>
      </Heading>
      <Text>{note.description}</Text>
      <Box>
        {/* Create Delete Button */}
        <Button data-cy="deleteBtn" colorScheme='red' variant='outline' onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Box>
  );
}
export default NoteCard;
/*
  {
    "id": 2,
    "title": "Grocery Shopping",
    "description": "Buy milk, eggs, and bread",
    "status": "pending"
  },
*/