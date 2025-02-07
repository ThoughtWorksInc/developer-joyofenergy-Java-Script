const { get_smart_meter, save } = require("../repository/smart_meter_repository")

const store_readings = (smart_meter_id, readings) => {
  if(!readings_valid(readings)) throw new Error('Invalid readings');
  const smart_meter = get_smart_meter(smart_meter_id) || {id: smart_meter_id};
  smart_meter.readings = readings;
  save(smart_meter);
}

const get_readings = smart_meter_id => get_smart_meter(smart_meter_id)?.readings

const readings_valid = readings =>
  Array.isArray(readings) && readings.length > 0 && readings.every(valid_reading)

const valid_reading = reading => {
  return Number.isFinite(reading.time)
    && reading.time > 0
    && reading.time < new Date().getTime()
    && Number.isFinite(reading.reading) // should it be reading.value?
    && reading.reading > 0
}

module.exports = {
  store_readings,
  get_readings
}
