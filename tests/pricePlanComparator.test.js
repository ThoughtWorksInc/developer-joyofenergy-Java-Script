const { meterNames } = require("../src/config/testData")
const { storeReadings } = require("../src/meters/meterService")
const { recommendCheapestPricePlans } = require("../src/pricePlans/pricePlanComparator")

const meterName = meterNames.METER0;
const testReadings = [{ time: 1, reading: 1 }, { time: 2, reading: 10 }];

const expectedCost = [
  {"cost": 9, "planName": "price-plan-3"},
  {"cost": 18, "planName": "price-plan-2"},
  {"cost": 90, "planName": "price-plan-1"}
];

describe('pricePlanComparator', () => {
  it('should recommend cheapest plans in order', () => {
    storeReadings(meterName, testReadings);

    const recommendations = recommendCheapestPricePlans(meterNames.METER0)

    expect(recommendations).toEqual(expectedCost)
  })

  it('should limit number of recommendations', () => {
    storeReadings(meterName, testReadings);

    const recommendations = recommendCheapestPricePlans(meterNames.METER0, 2)

    expect(recommendations).toEqual(expectedCost.slice(0, 2))
  })

  it('should throw error when meter is not found', () => {
      storeReadings(meterName, testReadings);

      expect(() => recommendCheapestPricePlans("some-meter"))
        .toThrow('Smart meter not found');
  })
})

