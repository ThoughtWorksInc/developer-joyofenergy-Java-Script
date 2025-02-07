const { pricePlans } = require("../config/pricePlans");

function getConsumptionCostsByPlan({ readings }) {
  return Object.keys(pricePlans).map((planName) => {
    const cost = calculateCost(readings, pricePlans[planName]);
    return { planName, cost };
  });
}

const calculateCost = (electricityReadings, pricePlan) => {
  const oldest = electricityReadings.reduce((min, reading) => {
    return !min || reading.time < min.time ? reading : min;
  }, null);

  const latest = electricityReadings.reduce((max, reading) => {
    return !max || reading.time > max.time ? reading : max;
  }, null);

  const energyConsumed = latest.reading - oldest.reading;
  return energyConsumed * pricePlan.rate;
};

module.exports = { getConsumptionCostsByPlan };
