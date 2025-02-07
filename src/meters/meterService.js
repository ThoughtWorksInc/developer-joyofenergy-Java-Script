const { getSmartMeter, save } = require("../meters");

const storeReadings = (smartMeterId, readings) => {
  if (!readingsValid(readings)) throw new Error("Invalid readings");

  const smartMeter = getSmartMeter(smartMeterId) || { id: smartMeterId };
  smartMeter.readings = readings;
  save(smartMeter);
};

const readingsValid = (readings) =>
  Array.isArray(readings) &&
  readings.length > 0 &&
  readings.every(isValidReading);

const isValidReading = ({ time, reading }) => {
  return isValidTime(time) && isValidValue(reading);
};

const isValidTime = (time) =>
  Number.isFinite(time) && time > 0 && time < Date.now();

const isValidValue = (value) => Number.isFinite(value) && value > 0;

module.exports = {
  storeReadings,
};
