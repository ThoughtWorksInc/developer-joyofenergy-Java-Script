const { getSmartMeter, save } = require("../repository/smartMeterRepository");

const storeReadings = (smartMeterId, readings) => {
  if (!readingsValid(readings)) throw new Error("Invalid readings");
  const smartMeter = getSmartMeter(smartMeterId) || { id: smartMeterId };
  smartMeter.readings = readings;
  save(smartMeter);
};

const getReadings = (smartMeterId) => getSmartMeter(smartMeterId)?.readings;

const readingsValid = (readings) =>
  Array.isArray(readings) &&
  readings.length > 0 &&
  readings.every(validReading);

const validReading = (reading) => {
  return (
    Number.isFinite(reading.time) &&
    reading.time > 0 &&
    reading.time < new Date().getTime() &&
    Number.isFinite(reading.reading) && // should it be reading.value?
    reading.reading > 0
  );
};

module.exports = {
  storeReadings,
  getReadings,
};
