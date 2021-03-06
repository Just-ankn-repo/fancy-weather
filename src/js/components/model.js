/* global navigator window */

import apis from '../api/index';
import utils from '../modelUtils/index';
import Vars from '../utils/Global.vars';
import globalErrors from '../utils/globalErrors';

export default class Model {
  constructor(controller) {
    this.controller = controller;
    this.localStorage = window.localStorage;
    this.vars = new Vars(this);
    this.lastPlace = undefined;
  }

  async getWeatherForPlace(place) {
    try {
      const vars = this.vars.getVars();
      const geoData = await utils.getLocation(place || null, vars.lang);
      const weatherData = await apis.weather(geoData.lat, geoData.lon, vars.lang, vars.units);
      const weatherAndGeoData = Object.assign(geoData, vars, weatherData);
      this.lastPlace = place || `${geoData.city}, ${geoData.country}`;

      this.controller.updateUI(weatherAndGeoData);
    } catch (e) {
      globalErrors(e);
      this.controller.updateUI(null);
    }
  }

  getWeather(place) {
    const success = (location) => this.getWeatherForPlace(location);
    const error = () => this.getWeatherForPlace();

    if (place || place === null) {
      this.getWeatherForPlace(place || this.lastPlace);
    } else if (!place) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  getLocalStorage() {
    const resLang = this.localStorage.getItem('lang');
    const resUnits = this.localStorage.getItem('units');
    return { lang: resLang, units: resUnits };
  }

  setLocalStorage(vars) {
    if (vars.lang) this.localStorage.setItem('lang', vars.lang);
    if (vars.units) this.localStorage.setItem('units', vars.units);
  }
}
