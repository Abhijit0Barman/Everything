import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Page from './components/Page';


function App() {
  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
        <Page />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
