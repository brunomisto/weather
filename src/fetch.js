import City from "./City";

const apiUrl = "https://api.weatherapi.com/v1/current.json";
const apiKey = "2b31a30d19cf497996c202820241701";

export default async function getCurrentWeather(locationQuery = "London") {
  try {
    const response = await fetch(
      `${apiUrl}?key=${apiKey}&q=${locationQuery}&aqi=no`,
      { mode: "cors" },
    );
    const json = await response.json();
    const { location, current } = json;
    return new City(
      location.name,
      location.region,
      location.country,
      location.localtime,
      {
        celsius: current.temp_c,
        fahrenheit: current.temp_f,
      },
      current.condition.text,
      {
        kilometer: current.wind_kph,
        mile: current.wind_mph,
        direction: current.wind_dir
      },
      current.humidity,
    );
  } catch (error) {
    return null;
  }
}
