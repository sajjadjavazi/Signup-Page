import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState<string>('');

    const handleSearch = () => {
        if (city.trim()) {
            onSearch(city);
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
            <TextField
                variant="outlined"
                label="Search for a city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                sx={{ width: '70%', mr: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
