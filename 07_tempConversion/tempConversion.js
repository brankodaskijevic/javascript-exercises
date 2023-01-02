const convertToCelsius = function(num) {
  const result = ((num - 32) * (5/9))

  if (result === 0) return 0
  if (result % 1 != 0) return Number(result.toFixed(1))

  return result
};

const convertToFahrenheit = function(num) {
  const result = ((num * (9/5) + 32))

  if (result === 0) return 0
  if (result % 1 != 0) return Number(result.toFixed(1))

  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
