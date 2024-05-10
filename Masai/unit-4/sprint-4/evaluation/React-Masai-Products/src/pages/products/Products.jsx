import {
  Button,
  Center,
  Container,
  HStack,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import ProductItem from "../../components/ProductItem";
import { useState, useReducer, useEffect } from "react";
import { getProducts } from "./api";
import { initState, productsReducer } from "./productsReducer";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import ErrorMessage from "../../components/ErrorMessage";

const Products = () => {
  const [state, dispatch] = useReducer(productsReducer, initState);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [sortOrder, setSortOrder] = useState("");
  const [filter, setFilter] = useState("");
  const [sortCriteria, setSortCriteria] = useState("price");
  // const sortCriteria="price"

  const fetchAndUpdateData = (page, limit, sortCriteria, sortOrder, filter) => {
    dispatch({ type: "LOADING" });

    const allParams = { page, limit, sortCriteria, sortOrder, filter };
    getProducts(allParams)
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res?.data });
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
  };

  useEffect(() => {
    fetchAndUpdateData(page, limit, sortCriteria, sortOrder, filter);
  }, [page, limit, sortCriteria, sortOrder, filter]);

  const { loading, err, res } = state;

  if (loading) {
    return <LoadingSkeleton />;
  }
  if (err) {
    return <ErrorMessage />;
  }
  // console.log(res);
  return (
    <Container data-cy="products" maxW="container.xl">
      <HStack spacing="24px" my={4}>
        {/*Add Sort Functionality */}
        <Select
          value={sortOrder}
          name="sort"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by price : Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>

        {/*Add Filter Functionality */}
        <Select
          value={filter}
          name="filter"
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1);
          }}
        >
          <option value="">filter by</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="homedecor">Home Decor</option>
        </Select>
      </HStack>

      <Center my={4}>
        {/* Add Pagination */}
        <HStack data-cy="pagination">
          {
            res?.totalPages &&
            new Array(+res?.totalPages).fill(0).map((_,i)=>(
              <Button 
              key={ i } 
              onClick={()=>setPage(i+1)}
              colorScheme={page===i+1?"red":"gray"}
              >{i+1}</Button>
            ))
          }
        </HStack>
      </Center>
      <SimpleGrid
        data-cy="products-container"
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        m={6}
      >
        {/* Render the products using ProductItem*/}
        {
          res?.data &&
          res?.data?.length > 0 &&
          res?.data?.map((product)=>(
           <ProductItem key={product.id} {...product}/> 
          ))
        }
      </SimpleGrid>
    </Container>
  );
};

export default Products;
