const smartMeters = {};

// smartMeter = {
//  id: 'id of the smart_meter string',
//  pricePlan: plan,
//  readings: [{ time: number, reading: number }]
// }

const save = (smartMeter) => {
  if (smartMeter["id"] == null || smartMeter["id"] == undefined)
    throw new Error("Invalid smart meter");
  smartMeters[smartMeter["id"]] = smartMeter;
};

const getSmartMeter = (id) => smartMeters[id];

module.exports = {
  save,
  getSmartMeter,
};
