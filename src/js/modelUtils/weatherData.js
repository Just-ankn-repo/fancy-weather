export default (weather) => ({
  timezoneOffset: `UTC${weather.timezone_offset < 0 ? '' : '+'}${weather.timezone_offset / 3600}`,
  currentWeather: {
    temp: Math.round(weather.current.temp),
    feelsLike: Math.round(weather.current.feels_like),
    humidity: `${Math.round(weather.current.humidity)}%`,
    windSpeed: `${Math.round(weather.current.wind_speed)}${weather.units === 'metric' ? 'm/s' : 'ft/s'}`,
    description: weather.current.weather[0].description,
    weather: weather.current.weather[0].main,
    icon: weather.current.weather[0].icon,
  },
  forecastWeather: {
    firstDay: {
      temp: Math.round((weather.daily[0].temp.min + weather.daily[0].temp.max) / 2),
      humidity: `${Math.round(weather.daily[0].humidity)}%`,
      windSpeed: `${Math.round(weather.daily[0].wind_speed)}${weather.units === 'metric' ? 'm/s' : 'ft/s'}`,
      description: weather.daily[0].weather[0].description,
      icon: weather.daily[0].weather[0].icon,
    },
    secondDay: {
      temp: Math.round((weather.daily[1].temp.min + weather.daily[1].temp.max) / 2),
      humidity: `${Math.round(weather.daily[1].humidity)}%`,
      windSpeed: `${Math.round(weather.daily[1].wind_speed)}${weather.units === 'metric' ? 'm/s' : 'ft/s'}`,
      description: weather.daily[1].weather[0].description,
      icon: weather.daily[1].weather[0].icon,
    },
    thirdDay: {
      temp: Math.round((weather.daily[2].temp.min + weather.daily[2].temp.max) / 2),
      humidity: `${Math.round(weather.daily[2].humidity)}%`,
      windSpeed: `${Math.round(weather.daily[2].wind_speed)}${weather.units === 'metric' ? 'm/s' : 'ft/s'}`,
      description: weather.daily[2].weather[0].description,
      icon: weather.daily[2].weather[0].icon,
    },
  },
});
