import getCurrentWeather from "./fetch";

export default class DOMManipulator {
  constructor(
    form,
    locationInput,
    nameElement,
    conditionElement,
    regionElement,
    countryElement,
    timeElement,
    temperatureElement,
    windSpeedElement,
    humidityElement,
  ) {
    this.form = form;
    this.locationInput = locationInput;
    this.nameElement = nameElement;
    this.conditionElement = conditionElement;
    this.regionElement = regionElement;
    this.countryElement = countryElement;
    this.timeElement = timeElement;
    this.temperatureElement = temperatureElement;
    this.windSpeedElement = windSpeedElement;
    this.humidityElement = humidityElement;
  }

  init() {
    this.form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const city = await getCurrentWeather(this.locationInput.value);
      this.displayCity(city);
      this.locationInput.value = "";
    });
  }

  static displayAlert() {
    // TODO
  }

  displayCity(city) {
    if (!city) {
      DOMManipulator.displayAlert("City not found");
      return;
    }
    this.nameElement.innerText = city.name;
    this.conditionElement.innerText = city.condition;
    this.regionElement.innerText = city.region;
    this.countryElement.innerText = city.country;
    this.timeElement.innerText = city.time;
    this.temperatureElement.innerText = city.temperature;
    this.windSpeedElement.innerText = city.windSpeed;
    this.humidityElement.innerText = city.humidity;
  }
}
