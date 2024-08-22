import axios from 'axios';

const API_KEY = '0ef9f7495881307c155715f57672ec45';
const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getCoordinates = async (city: string): Promise<{ lat: number; lon: number }> => {
    const apiKey = '0ef9f7495881307c155715f57672ec45';
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch coordinates');
    }
    const data = await response.json();
    return { lat: data.coord.lat, lon: data.coord.lon };
};
export interface CurrentWeather {
    temp: number;
    weather: {
        description: string;
        icon: string;
    }[];
    humidity: number;
    wind_speed: number;
}

export interface ForecastData {
    dt: number;
    main: {
        temp: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
}

export const getCurrentWeather = async (lat: number, lon: number): Promise<CurrentWeather> => {
    try {
        const response = await axios.get(CURRENT_WEATHER_URL, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: 'metric',
            },
        });

        return {
            temp: response.data.main.temp,
            weather: response.data.weather,
            humidity: response.data.main.humidity,
            wind_speed: response.data.wind.speed,
        };
    } catch (error) {
        console.error('Error fetching current weather:', error);
        throw new Error('Failed to fetch current weather');
    }
};

export const getForecast = async (lat: number, lon: number): Promise<ForecastData[]> => {
    try {
        const response = await axios.get(FORECAST_URL, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: 'metric',
            },
        });

        return response.data.list.map((forecast: any) => ({
            dt: forecast.dt,
            main: forecast.main,
            weather: forecast.weather,
        }));
    } catch (error) {
        console.error('Error fetching forecast data:', error);
        throw new Error('Failed to fetch forecast data');
    }
};
