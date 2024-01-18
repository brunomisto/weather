import City from "./City";

const apiUrl = "http://api.weatherapi.com/v1/current.json";
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
      current.temp_c,
      current.condition.text,
      current.wind_kph,
      current.humidity,
    );
  } catch (error) {
    return null;
  }
}
