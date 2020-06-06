import constants from './constants';
import animatedWeather from './animatedWeather';
import i18n from '../i18n/index';

export default (data) => {
  let location;

  if (data.city && data.country) location = `${data.city}, ${data.country}`;
  else if (data.city || data.country) location = data.city || data.country;
  else location = data.lang === 'en' ? 'Somewhere here' : 'Где-то здесь';

  constants.feelsLikeText.textContent = i18n[data.lang].feelsLike;
  constants.windText.textContent = i18n[data.lang].wind;
  constants.humidityText.textContent = i18n[data.lang].humidity;
  constants.searchInputText.placeholder = i18n[data.lang].searchInputText;
  constants.searchButtonText.textContent = i18n[data.lang].searchButtonText;
  constants.latitudeText.textContent = i18n[data.lang].latitudeText;
  constants.longitudeText.textContent = i18n[data.lang].longitudeText;

  constants.currentCity.textContent = location;
  constants.currentWeekDay.textContent = data.weekDay;
  constants.currentDay.textContent = data.day;
  constants.currentMonth.textContent = data.month;
  constants.currentTimezone.textContent = data.timezoneOffset;

  constants.currentWeatherIcon.innerHTML = animatedWeather[data.currentWeather.icon];
  constants.currentWeatherDesc.textContent = data.currentWeather.description;
  constants.currentDegrees.textContent = data.currentWeather.temp;
  constants.currentFeelsLike.textContent = data.currentWeather.feelsLike;
  constants.currentWind.textContent = data.currentWeather.windSpeed;
  constants.currentHumidity.textContent = data.currentWeather.humidity;

  constants.firstDayTitle.textContent = data.firstWeekDay;
  constants.firstDayDegrees.textContent = data.forecastWeather.firstDay.temp;
  constants.firstDayIcon.innerHTML = animatedWeather[data.forecastWeather.firstDay.icon];

  constants.secondDayTitle.textContent = data.secondWeekDay;
  constants.secondDayDegrees.textContent = data.forecastWeather.secondDay.temp;
  constants.secondDayIcon.innerHTML = animatedWeather[data.forecastWeather.secondDay.icon];

  constants.thirdDayTitle.textContent = data.thirdWeekDay;
  constants.thirdDayDegrees.textContent = data.forecastWeather.thirdDay.temp;
  constants.thirdDayIcon.innerHTML = animatedWeather[data.forecastWeather.thirdDay.icon];
};
