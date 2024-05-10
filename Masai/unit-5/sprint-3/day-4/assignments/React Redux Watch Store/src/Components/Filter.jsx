// import React from "react";

// const Filter = () => {
//   // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
//   return (
//     <div>
//       <h3>Filters</h3>
//       <div>Category</div>
//       <div data-testid="filter-category">
//         <div>
//           <input type="checkbox" value="Analog" />
//           <label>Analog</label>
//         </div>
//         <div>
//           <input type="checkbox" value="Digital" />
//           <label>Digital</label>
//         </div>
//         <div>
//           <input type="checkbox" value="Chronograph" />
//           <label>Chronograph</label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from '../store/actions'; // Assuming you have an updateFilters action

const Filter = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.app.selectedFilters); // Assuming you store selected filters in your Redux state
  const [filterValues, setFilterValues] = useState(selectedFilters);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    const updatedFilters = checked
      ? [...filterValues, value]
      : filterValues.filter((filter) => filter !== value);

    setFilterValues(updatedFilters);
    dispatch(updateFilters(updatedFilters)); // Dispatch action to update Redux store
  };

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input
            type="checkbox"
            value="Analog"
            defaultChecked={filterValues.includes("Analog")}
            onChange={handleFilterChange}
          />
          <label>Analog</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Digital"
            defaultChecked={filterValues.includes("Digital")}
            onChange={handleFilterChange}
          />
          <label>Digital</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Chronograph"
            defaultChecked={filterValues.includes("Chronograph")}
            onChange={handleFilterChange}
          />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
