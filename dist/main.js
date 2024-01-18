(()=>{"use strict";class t{constructor(t,e,n,i,o,m,c,d){this.name=t,this.region=e,this.country=n,this.time=i,this.temperature=o,this.condition=m,this.windSpeed=c,this.humidity=d}}class e{constructor(t,e,n,i,o,m,c,d,s,r){this.form=t,this.locationInput=e,this.nameElement=n,this.conditionElement=i,this.regionElement=o,this.countryElement=m,this.timeElement=c,this.temperatureElement=d,this.windSpeedElement=s,this.humidityElement=r}init(){this.form.addEventListener("submit",(async e=>{e.preventDefault();const n=await async function(e="London"){try{const n=await fetch(`http://api.weatherapi.com/v1/current.json?key=2b31a30d19cf497996c202820241701&q=${e}&aqi=no`,{mode:"cors"}),i=await n.json(),{location:o,current:m}=i;return new t(o.name,o.region,o.country,o.localtime,m.temp_c,m.condition.text,m.wind_kph,m.humidity)}catch(t){return null}}(this.locationInput.value);this.displayCity(n),this.locationInput.value=""}))}static displayAlert(){}displayCity(t){t?(this.nameElement.innerText=t.name,this.conditionElement.innerText=t.condition,this.regionElement.innerText=t.region,this.countryElement.innerText=t.country,this.timeElement.innerText=t.time,this.temperatureElement.innerText=t.temperature,this.windSpeedElement.innerText=t.windSpeed,this.humidityElement.innerText=t.humidity):e.displayAlert("City not found")}}new e(document.getElementById("fetch-location"),document.getElementById("location"),document.getElementById("name"),document.getElementById("condition"),document.getElementById("region"),document.getElementById("country"),document.getElementById("time"),document.getElementById("temperature"),document.getElementById("windspeed"),document.getElementById("humidity")).init()})();