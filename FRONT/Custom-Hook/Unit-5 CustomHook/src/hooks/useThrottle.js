import { useRef } from "react";

export const useThrottle = () => {
  let { current: wait } = useRef(false);

  const throttle = (fun) => {
    if (wait === true) {
      return;
    }
    if (wait === false) {
      fun();
      wait = true;
    }
    setTimeout(() => {
      wait = false;
    }, 2000);
  };
  return throttle;
};

/*
import { useRef, useEffect } from "react";

export const useThrottle = () => {
  const wait = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      // Clear the timeout when the component unmounts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const throttle = (fun) => {
    if (wait.current) {
      return;
    }
    fun();
    wait.current = true;
    timeoutRef.current = setTimeout(() => {
      wait.current = false;
    }, 2000);
  };

  return throttle;
};

 */





/*
import React, { useState } from "react";
import { useThrottle } from "./useThrottle"; // Assuming useThrottle is exported from a file named useThrottle.js

const ThrottledApiComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // Create a throttled version of the fetchData function
  const throttledFetchData = useThrottle(() => {
    // Simulate an API call with a delay
    setTimeout(() => {
      // Replace this with your actual API call
      const mockResults = [`Result 1 for ${searchTerm}`, `Result 2 for ${searchTerm}`];
      setResults(mockResults);
    }, 1000);
  });

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Call the throttled fetchData function with the new search term
    throttledFetchData();
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThrottledApiComponent;



In this example, the useThrottle hook is imported and used to create a throttled version of the fetchData function. The fetchData function simulates an API call with a delay and updates the results state with the mock results. The throttledFetchData function is then used as the callback for the onChange event of the search input.

When the user types in the search input, the handleSearch function is called, which updates the searchTerm state and calls the throttledFetchData function. The throttledFetchData function will execute the fetchData function at most once every 2 seconds, which helps prevent excessive API calls and improve performance.

You can use this ThrottledApiComponent in your React application to see the throttling effect in action when making API calls.
*/