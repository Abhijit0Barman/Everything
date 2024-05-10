// import React from "react";
// import Filter from "../Components/Filter";

// const Watches = () => {
//   return (
//     <div>
//       <Filter />
//       <div>
//         {/* Map through the watch list here using WatchCard Component */}
//       </div>
//     </div>
//   );
// };

// export default Watches;


import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from '../store/actions'; // Assuming you have a fetchData action
import Filter from "../Components/Filter";
import WatchCard from "../Components/WatchCard"; // Assuming you have a WatchCard component

const Watches = () => {
  const dispatch = useDispatch();
  const watchData = useSelector((state) => state.app.watchData);

  useEffect(() => {
    dispatch(fetchData()); // Dispatch an action to fetch data
  }, [dispatch]);

  return (
    <div>
      <Filter /> {/* Implement your Filter component */}
      <div>
        {watchData.map((watch) => (
          // Display each watch using WatchCard component
          <WatchCard key={watch.id} watch={watch} />
        ))}
      </div>
    </div>
  );
};

export default Watches;
