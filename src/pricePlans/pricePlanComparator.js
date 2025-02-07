const { getConsumptionCostsByPlan } = require("../usage");
const { getSmartMeter } = require("../meters");

const recommendCheapestPricePlans = (smartMeterId, limit) => {
  const smartMeter = getSmartMeter(smartMeterId);

  if (!smartMeter) {
    throw new Error("Smart meter not found");
  }

  const consumptionsForPricePlans = getConsumptionCostsByPlan(smartMeter);

  let recommendations = consumptionsForPricePlans.sort(
    (a, b) => a.cost - b.cost
  );

  if (limit && limit < recommendations.length) {
    recommendations = recommendations.slice(0, limit);
  }

  return recommendations;
};

module.exports = { recommendCheapestPricePlans };
