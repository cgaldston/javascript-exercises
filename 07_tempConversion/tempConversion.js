const convertToCelsius = function(temperature) {
  let farenheit = (temperature - 32) * (5/9);
  return Math.round(farenheit * 10) / 10
};

const convertToFahrenheit = function(temperature) {
  let celcius = (temperature * (9/5)) + 32;
  return Math.round(celcius * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
