const { pricePlans, pricePlanNames } = require("./pricePlans");
const { save } = require("../meters");
const { generateFakeReadings } = require("../readings");

const meterNames = {
  METER0: "smart-meter-0",
  METER1: "smart-meter-1",
  METER2: "smart-meter-2",
  METER3: "smart-meter-3",
  METER4: "smart-meter-4",
};

const generateAllMeters = () => {
  save({
    id: meterNames.METER0,
    pricePlan: pricePlans[pricePlanNames.PLAN_1],
    readings: [],
  });

  save({
    id: meterNames.METER1,
    pricePlan: pricePlans[pricePlanNames.PLAN_2],
    readings: generateFakeReadings(20),
  });

  save({
    id: meterNames.METER2,
    pricePlan: pricePlans[pricePlanNames.PLAN_3],
    readings: generateFakeReadings(10),
  });

  save({
    id: meterNames.METER3,
    pricePlan: pricePlans[pricePlanNames.PLAN_1],
    readings: generateFakeReadings(3),
  });
};

generateAllMeters();

module.exports = { meterNames };
