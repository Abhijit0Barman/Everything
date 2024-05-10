import { useState, useReducer, useEffect } from 'react'
import { VStack, Heading, Flex, Skeleton, Stack, } from '@chakra-ui/react'
import axios from 'axios';
import Navbar from './Navbar';
import { initialState, reducer } from '../reducer/reducer';
import NoteCard from './NoteCard';

const Home = () => {
  // import the chakra UI components from the chakra UI library , and remove the following.
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchNotes = async () => {
    dispatch({ type: "GET_NOTES_REQUEST" });
    fetchNotes()
    try {
      const response = await axios.get("http://localhost:8080/notes");
      console.log(response.data);
      dispatch({
        type: "GET_NOTES_SUCCESS",
        payload: response.data
      })
    } catch (error) {
      dispatch({ type: "GET_NOTES_FAILURE" })
    }
  }

  useEffect(() => {
    fetchNotes();
  }, [])

  const Stack = () => <div />;
  const Flex = () => <div />;

  return (
    <>
      <Navbar />
      <Flex justify="center">
        {
          state.loading ? (
            <VStack spacing={4} data-cy="loading_indicator">
              <Skeleton height='20px' width="200px" />
              <Skeleton height='20px' width="200px" />
              <Skeleton height='20px' width="200px" />
              <Skeleton height='20px' width="200px" />
            </VStack>
          ) : (
            <Flex direction="column" alignItems="center" data-cy="notes_container">
              <VStack spacing={4} data-cy="pending_notes">
                <Heading as="h1" size="md">
                  Pending
                </Heading>
                {
                  state.notes
                    .filter((note) => note.status === 'pending').map((note) => (
                      <NoteCard key={note.id} note={note} />
                    ))
                }
              </VStack>
              <VStack spacing={4} data-cy="in_progress_notes">
                <Heading as="h1" size='md'>
                  In Progress
                </Heading>
                {
                  state.notes
                    .filter((note) => note.status === 'in_progress')
                    .map((note) => (
                      <NoteCard key={note.id} note={note} />
                    ))
                }
              </VStack>
              <VStack spacing={4} data-cy="completed_notes">
                <Heading as="h1" size='md'>
                  Completed
                </Heading>
                {
                  state.notes
                    .filter((note) => note.status === 'Completed')
                    .map((note) => (
                      <NoteCard key={note.id} note={note} />
                    ))
                }
              </VStack>
            </Flex>
          )
        }
      </Flex>
    </>
  );
};

export default Home;
