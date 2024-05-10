// function RestaurantCard() {
//   //import the chakra UI components from the chakra UI library , and remove the following.
//   const Card = () => <div></div>;
//   const CardBody = () => <div></div>;
//   const Image = () => <div></div>;
//   const Stack = () => <div></div>;
//   const Heading = () => <div></div>;
//   const Text = () => <div></div>;
//   const Link = () => <div></div>;
//   const Button = () => <div></div>;
//   const VStack = () => <div></div>;
//   const HStack = () => <div></div>;

//   return (
//     <Card maxW="sm" m={4} data-testid="restaurant-card">
//       <CardBody>
//         <VStack align="stretch">
//           {/* Add Image here */}
//           <Stack mt="6" spacing="3">
//             {/* Add Heading and Text tags here */}
//             <HStack spacing="6">
//               {/* Add EDIT Link and DELETE Button here */}
//             </HStack>
//           </Stack>
//         </VStack>
//       </CardBody>
//     </Card>
//   );
// }

// export default RestaurantCard;
import React from 'react';
import { Box, Image, Heading, Text, Link, Button, HStack } from '@chakra-ui/react';

const RestaurantCard = ({ restaurant }) => {
  const handleDelete = async () => {
    try {
      // Make DELETE request to delete the restaurant
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="md" p={4}>
      <Image src={restaurant.image} alt={restaurant.name} />
      <Box mt={4}>
        <Heading size="md">Name: {restaurant.name}</Heading>
        <Text>Type: {restaurant.type}</Text>
        <Text>Rating: {restaurant.rating}</Text>
        <Text>Number of Votes: {restaurant.number_of_votes}</Text>
        <Text>Price Starts From: ${restaurant.price_starts_from}</Text>
      </Box>
      <HStack mt={4}>
        <Link to={`/edit-restaurant/${restaurant.id}`} mr={2}>
          Edit
        </Link>
        <Button colorScheme="red" onClick={handleDelete}>
          Delete
        </Button>
      </HStack>
    </Box>
  );
};

export default RestaurantCard;
