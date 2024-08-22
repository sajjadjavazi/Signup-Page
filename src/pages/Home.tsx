import { useState } from 'react';
import { Container, Typography, Button, Box, CircularProgress } from '@mui/material';
import { getCoordinates, getCurrentWeather, getForecast, CurrentWeather, ForecastData } from '../services/weatherService';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/Weather/WeatherDisplay';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Add loading state

  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = async (city: string) => {
    try {
      setLoading(true); // Start loading
      setError(null); // Reset error state
      const { lat, lon } = await getCoordinates(city);
      const current = await getCurrentWeather(lat, lon);
      const forecast = await getForecast(lat, lon);
      setCurrentWeather(current);
      setForecastData(forecast);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/login');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(src/assets/images/weather-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container>
        <Typography variant="h3" align="center" gutterBottom sx={{ mt: 3,}}>
          Breeze
        </Typography>
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
            <CircularProgress size={60} thickness={4} color="primary" />
          </Box>
        ) : error ? (
          <Typography variant="h6" color="error" align="center">
            {error}
          </Typography>
        ) : (
          <WeatherDisplay currentWeather={currentWeather} forecastData={forecastData} />
        )}
        <Box sx={{}}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleLogoutClick}
            sx={{ mt: 3, mb: 3 }}
          >
            Logout
          </Button>
          <Typography variant="h6" color="white">Please use VPN.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
