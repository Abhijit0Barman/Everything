// function Pagination() {
//   // import the chakra UI components from the chakra UI library , and remove the following.
//   const Button = ()=><div></div>;
//   const Center = ()=><div></div>;
//   const HStack = ()=><div></div>;

//   return (
//     <Center data-testid="pagination-component">
//       <HStack>{/* render all the Buttons here */}</HStack>
//     </Center>
//   );
// }

// export default Pagination;
import React from 'react';
import { Button } from '@chakra-ui/react';

const Pagination = ({ totalPages }) => {
  const handlePageChange = (page) => {
    // Logic for changing page
  };

  return (
    <div>
      {Array.from(Array(totalPages).keys()).map((page) => (
        <Button key={page} onClick={() => handlePageChange(page + 1)}>
          {page + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;

