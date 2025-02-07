const { meterNames } = require("./config/testData");
const { getAllSmartMeters, getSmartMeter } = require("./meters");
const { generateFakeReadings } = require("./readings");
const { storeReadings } = require("./meters/meterService");
const {
  recommendCheapestPricePlans,
} = require("./pricePlans/pricePlanComparator");

require("./config/testData");

const TEST_SMART_METER_ID = meterNames.METER0;

const RESULTS_COUNT_LIMIT = 2;

function main() {
  storeReadings(TEST_SMART_METER_ID, generateFakeReadings(3));

  console.log(getSmartMeter(TEST_SMART_METER_ID));

  const cheapestPlanList = recommendCheapestPricePlans(
    TEST_SMART_METER_ID,
    RESULTS_COUNT_LIMIT
  );

  console.log("cheapestPlanList", cheapestPlanList);
}

main();
