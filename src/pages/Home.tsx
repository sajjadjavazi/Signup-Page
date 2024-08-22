import Header from '../components/Header/Header';
import WeatherDisplay from '../components/Weather/WeatherDisplay';
import WeatherDetails from '../components/Weather/WeatherDetails';
import { Container, Button } from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/login');
  };

  const lat = 40.7128;
  const lon = -74.0060;

  return (
    <div>
      <Header />
      <Container>
        <WeatherDisplay lat={lat} lon={lon} />
        <WeatherDetails />
        <Button variant="contained" color="secondary" fullWidth onClick={handleLogoutClick} sx={{ mt: 3 }}>
          Logout
        </Button>
      </Container>
    </div>
  );
};

export default Home;