// smartMeter = {
//  id: 'id of the smart_meter string',
//  pricePlan: plan,
//  readings: [{ time: number, reading: number }]
// }

const smartMeters = {};

const save = ({ id, pricePlan, readings }) => {
  if (!id) throw new Error("Invalid smart meter");

  smartMeters[id] = { id, pricePlan, readings };
};

const getSmartMeter = (id) => smartMeters[id];

const getAllSmartMeters = () => smartMeters;

module.exports = {
  save,
  getSmartMeter,
  getAllSmartMeters,
};
