import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from '../Redux/action'
import RestaurantCard from '../Components/RestaurantCard';
import Pagination from '../Components/Pagination';

const HomePage = () => {
  // Show below loading indicator while data is being loaded
  // <h1 className="loading_indicator">Loading...</h1>;
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.isLoading)
  const restaurants = useSelector((state) => state.restaurants)
  const totalPages = useSelector((state) => state.totalPages)

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])
  
  // console.log(restaurants);

  return (
    <div>
      {isLoading ? (
        <h1 className="loading_indicator">Loading...</h1>
      ) : (
        <div className="restaurants_wrapper">
          {restaurants?.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
          <Pagination currentPage={1} totalPages={totalPages} updatePage={() => { }} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
