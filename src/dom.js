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
    cityCardElement,
    dialogElement,
    dialogContent,
    dialogCloseButton,
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
    this.cityCardElement = cityCardElement;
    this.dialogElement = dialogElement;
    this.dialogContent = dialogContent;
    this.dialogCloseButton = dialogCloseButton;
  }

  init() {
    this.form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const city = await getCurrentWeather(this.locationInput.value);
      this.displayCity(city);
      this.locationInput.value = "";
    });

    this.dialogCloseButton.addEventListener("click", () => {
      this.dialogContent.innerHTML = "";
      this.dialogElement.close();
    });
  }

  displayAlert(message) {
    this.dialogContent.innerHTML = "";
    const messageElement = document.createElement("p");
    messageElement.innerText = message;
    this.dialogContent.appendChild(messageElement);
    this.dialogElement.showModal();
  }

  displayCity(city) {
    if (!city) {
      this.displayAlert("City not found");
      return;
    }
    this.cityCardElement.classList.add("active");
    this.nameElement.innerText = city.name;
    this.conditionElement.innerText = city.condition;
    this.regionElement.innerText = city.region;
    this.countryElement.innerText = city.country;
    this.timeElement.innerText = city.time;
    this.temperatureElement.innerText = city.temperature.celsius;
    this.windSpeedElement.innerText = city.wind.kilometer;
    this.humidityElement.innerText = city.humidity;
  }
}
