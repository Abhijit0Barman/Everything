import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    useEffect(() => {
        if (debouncedSearchTerm) {
            // Call OMDB API with debouncedSearchTerm
            // Update searchResults state with API response
        } else {
            setSearchResults([]);
        }
    }, [debouncedSearchTerm]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search movies..."
            />
            <ul>
                {searchResults.map((result) => (
                    <li key={result.imdbID}>{result.Title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;
