# Breeze |  [Demo](https://sajjadjavazi.github.io/Weather-Application/ "Demo") | [Video Demo](https://drive.google.com/file/d/1XlXsFwrgB_ibcg5CeXjygVDngz-nRn6e/view?usp=sharing "Video Demo")
**Breeze is a simple yet elegant weather application that allows users to get current weather information for any location around the world. With a clean and intuitive interface, Breeze provides essential weather details, making it a perfect tool for anyone who wants to stay updated with the latest weather conditions.**

## Features
- User Authentication: Secure sign-up and sign-in functionality to create and manage user accounts.
- Weather Search: Search for weather information by city name.
- Current Weather Data: Get the current temperature, weather conditions, humidity, wind speed, and more.
- 5-Day Forecast: View a 5-day weather forecast with a 3-hour time step.
- Location-Based Weather: Automatically fetch weather data based on the user's location.
- Responsive Design: Fully responsive layout that works seamlessly on all devices.
- Logout Functionality: Securely log out of the application at any time.
## Tech Stack
- Frontend: React, TypeScript, Material-UI
- Backend: OpenWeatherMap API, Axios, Validator
- Authentication: Custom hooks and localStorage
## Project structure
```javascript
├── public
│   ├── assets
│   │   └── images
│   └── index.html
├── src
│   ├── components
│   │   ├── AuthForm
│   │   │   ├── SignInForm.tsx
│   │   │   └── SignUpForm.tsx
│   │   └── Weather
│   │   │   └── WeatherDisplay.tsx
│   │   └── SearchBar.tsx
│   ├── hooks
│   │   └── useAuth.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── Login.tsx
│   ├── services
│   │   └── weatherService.ts
│   ├── App.tsx
│   ├── routes.tsx
│   └── index.tsx
├── .gitignore
├── package.json
└── README.md
...
```

## Contributing
Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/sajjadjavazi/Weather-Application/blob/master/LICENSE "LICENSE") file for details.
