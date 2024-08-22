import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { CurrentWeather, ForecastData } from '../../services/weatherService';

interface WeatherDisplayProps {
    currentWeather: CurrentWeather | null;
    forecastData: ForecastData[] | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ currentWeather, forecastData }) => {
    if (!currentWeather || !forecastData) {
        return <Typography variant="h6" color="textSecondary">No weather data available.</Typography>;
    }

    return (
        <Box>
            {/* Current Weather */}
            <Card sx={{ mb: 4 }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Current Weather
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h6">Temperature: {currentWeather.temp}°C</Typography>
                            <Typography variant="h6">Humidity: {currentWeather.humidity}%</Typography>
                            <Typography variant="h6">Wind Speed: {currentWeather.wind_speed} m/s</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                                <img
                                    src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                                    alt={currentWeather.weather[0].description}
                                    style={{ width: '100px', height: '100px' }}
                                />
                                <Typography variant="h6">{currentWeather.weather[0].description}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* 5-Day Forecast */}
            <Typography variant="h4" gutterBottom>
                5-Day Forecast
            </Typography>
            <Grid container spacing={2}>
                {forecastData.map((forecast, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    {new Date(forecast.dt * 1000).toLocaleString()}
                                </Typography>
                                <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                                    <img
                                        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                                        alt={forecast.weather[0].description}
                                        style={{ width: '80px', height: '80px' }}
                                    />
                                    <Typography variant="h6">Temp: {forecast.main.temp}°C</Typography>
                                    <Typography variant="body1">{forecast.weather[0].description}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WeatherDisplay;
