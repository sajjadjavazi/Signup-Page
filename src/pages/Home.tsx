import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { getCoordinates, getCurrentWeather, getForecast, CurrentWeather, ForecastData } from '../services/weatherService';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/Weather/WeatherDisplay';

const Home: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      setError(null); // Reset error state

      // Get coordinates from city name
      const { lat, lon } = await getCoordinates(city);

      // Fetch weather data using coordinates
      const current = await getCurrentWeather(lat, lon);
      const forecast = await getForecast(lat, lon);

      setCurrentWeather(current);
      setForecastData(forecast);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    }
  };

  return (
    
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Weather App
          </Typography>
          <SearchBar onSearch={handleSearch} />
        </Box>
        {error ? (
          <Typography variant="h6" color="error" align="center">
            {error}
          </Typography>
        ) : (
          <WeatherDisplay currentWeather={currentWeather} forecastData={forecastData} />
        )}
      </Container>

  );
};

export default Home;
