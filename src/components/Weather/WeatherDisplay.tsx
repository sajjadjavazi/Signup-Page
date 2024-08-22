import React, { useEffect, useState } from 'react';
import { getCurrentWeather, getForecast, CurrentWeather, ForecastData } from '../../services/weatherService';

interface WeatherDisplayProps {
    lat: number;
    lon: number;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ lat, lon }) => {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
    const [forecastData, setForecastData] = useState<ForecastData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const current = await getCurrentWeather(lat, lon);
                const forecast = await getForecast(lat, lon);
                setCurrentWeather(current);
                setForecastData(forecast);
            } catch (error) {
                setError('Could not fetch weather data.');
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [lat, lon]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Current Weather</h2>
            <p>Temperature: {currentWeather?.temp}°C</p>
            <p>Humidity: {currentWeather?.humidity}%</p>
            <p>Wind Speed: {currentWeather?.wind_speed} m/s</p>
            <p>Description: {currentWeather?.weather[0].description}</p>
            <img
                src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`}
                alt={currentWeather?.weather[0].description}
            />

            <h2>5-Day Forecast</h2>
            <ul>
                {forecastData?.map((forecast, index) => (
                    <li key={index}>
                        <p>{new Date(forecast.dt * 1000).toLocaleString()}</p>
                        <p>Temp: {forecast.main.temp}°C</p>
                        <p>Description: {forecast.weather[0].description}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                            alt={forecast.weather[0].description}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherDisplay;
