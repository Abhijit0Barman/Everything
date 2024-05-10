import React, { useState, useEffect } from 'react';
import useThrottle from './useThrottle'; // Import your useThrottle hook

const ThrottledSearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const throttledSearchTerm = useThrottle(searchTerm, 300); // Use the useThrottle hook

    useEffect(() => {
        if (throttledSearchTerm) {
            // Call OMDB API with throttledSearchTerm
            // Update searchResults state with API response
        } else {
            setSearchResults([]);
        }
    }, [throttledSearchTerm]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search movies (throttled)..."
            />
            <ul>
                {searchResults.map((result) => (
                    <li key={result.imdbID}>{result.Title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ThrottledSearchComponent;
