// function Home() {
//   // import the chakra UI components from the chakra UI library , and remove the following.
//   const Box = ()=><div></div>;
//   const ButtonGroup = ()=><div></div>;
//   const Button = ()=><div></div>;
//   const SimpleGrid = ()=><div></div>;
//   const Select = ()=><div></div>;
//   const VStack = ()=><div></div>;

//   return (
//     <>
//       <VStack spacing={4} mt={4}>
//         {/* Add 3 select tags along with their options as mentioned in the problem statement */}
//       </VStack>

//       {/* Append all the RestaurantCard here and all restaurant cards should be wrapped inside SimpleGrid as mentioned in the problem statement*/}

//       {/* add Pagination here */}
//     </>
//   );
// }

// export default Home;
import React, { useEffect, useReducer } from 'react';
import { Box, SimpleGrid, Select } from '@chakra-ui/react';
import { getRestaurants } from '../utils/api';
import RestaurantCard from '../Components/RestaurantCard';
import Pagination from '../Components/Pagination';
import { homeReducer } from '../reducers/homeReducer';

const Home = () => {
  const initialState = {
    loading: true,
    data: [],
    err: false,
    totalPages: 1,
  };

  const [state, dispatch] = useReducer(homeReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRestaurants();
        const totalCount = response.headers.get('X-Total-Count');
        const data = await response.json();
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: { data, totalPages: Math.ceil(totalCount / 3) },
        });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };

    fetchData();
  }, []);

  return (
    <Box p={4}>
      <Box mb={4} display="flex" alignItems="center" justifyContent="space-between">
        <Select>
          <option value={3}>3 per page</option>
          <option value={6}>6 per page</option>
          <option value={9}>9 per page</option>
        </Select>
        <Select>
          <option value="rating">Sort by Rating</option>
          <option value="price_starts_from">Sort by Price</option>
        </Select>
        <Select>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </Box>
      {state.loading && <h1>Loading...</h1>}
      {state.err && <h1>Something went wrong...</h1>}
      {!state.loading && !state.err && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {state.data.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </SimpleGrid>
      )}
      {!state.loading && !state.err && <Pagination totalPages={state.totalPages} />}
    </Box>
  );
};

export default Home;
