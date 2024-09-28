function roundOff(value){
  return Math.round(value * 10) / 10;
}
const convertToCelsius = function(value) {
  return roundOff(((value - 32) * (5/9)));
};

const convertToFahrenheit = function(value) {
  return roundOff((value * (9/5)) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
