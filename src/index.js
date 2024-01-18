import DOMManipulator from "./dom";

const domManipulator = new DOMManipulator(
  document.getElementById("fetch-location"),
  document.getElementById("location"),
  document.getElementById("name"),
  document.getElementById('condition'),
  document.getElementById('region'),
  document.getElementById('country'),
  document.getElementById('time'),
  document.getElementById('temperature'),
  document.getElementById('windspeed'),
  document.getElementById('humidity'),
  document.getElementById('city-card')
);

domManipulator.init();
