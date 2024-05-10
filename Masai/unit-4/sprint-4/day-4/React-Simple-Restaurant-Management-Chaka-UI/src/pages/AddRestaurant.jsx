// function AddRestaurant() {
//   // import the chakra UI components from the chakra UI library , and remove the following.
//   const Button = ()=><div></div>;
//   const FormControl = ()=><div></div>;
//   const Input = ()=><div></div>;
//   const Select = ()=><div></div>;
//   const VStack = ()=><div></div>;

//   return (
//     <form>
//       <VStack spacing={4} my={4}>
//         <FormControl>
//           <Input name="name" type="text" placeholder="Add restaurant name" />
//         </FormControl>
//         <FormControl>
//           <Select placeholder="Select Type" name="type">
//             <option value="ethnic">Ethnic</option>
//             <option value="cafe">Cafe</option>
//             <option value="casual_dining">Casual Dining</option>
//             <option value="fine_dining">Fine Dining</option>
//             <option value="fast_food">Fast Food</option>
//           </Select>
//         </FormControl>
//         <FormControl>
//           <Input name="rating" type="number" placeholder="Rating" />
//         </FormControl>
//         <FormControl>
//           <Input
//             name="number_of_votes"
//             type="number"
//             placeholder="Number of votes"
//           />
//         </FormControl>
//         <FormControl id="price_starts_from">
//           <Input
//             name="price_starts_from"
//             type="number"
//             placeholder="Price Starts From"
//           />
//         </FormControl>
//         <FormControl id="image">
//           <Input name="image" type="text" placeholder="Add Image URL" />
//         </FormControl>
//         <Button type="submit" colorScheme="pink" variant="outline">
//           CREATE RESTAURANT
//         </Button>
//       </VStack>
//     </form>
//   );
// }

// export default AddRestaurant;
import React, { useReducer } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Select } from '@chakra-ui/react';
import { postRestaurant } from '../utils/api';
import { addRestaurantReducer } from '../reducers/addRestaurantReducer';

const AddRestaurant = () => {
  const initialState = {
    name: '',
    type: '',
    rating: '',
    number_of_votes: '',
    price_starts_from: '',
    image: '',
  };

  const [state, dispatch] = useReducer(addRestaurantReducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postRestaurant(state);
      // Redirect to Home page after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_INPUT', payload: { name, value } });
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" value={state.name} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Type</FormLabel>
          <Select name="type" value={state.type} onChange={handleChange}>
            <option value="ethnic">Ethnic</option>
            <option value="cafe">Cafe</option>
            <option value="casual_dining">Casual Dining</option>
            <option value="fine_dining">Fine Dining</option>
            <option value="fast_food">Fast Food</option>
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Rating</FormLabel>
          <Input type="number" name="rating" value={state.rating} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Number of Votes</FormLabel>
          <Input type="number" name="number_of_votes" value={state.number_of_votes} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Price Starts From</FormLabel>
          <Input type="number" name="price_starts_from" value={state.price_starts_from} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Image</FormLabel>
          <Input type="text" name="image" value={state.image} onChange={handleChange} />
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default AddRestaurant;
