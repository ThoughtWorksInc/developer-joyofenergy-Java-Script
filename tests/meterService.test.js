const { getSmartMeter } = require("../src/meters");
const { storeReadings } = require("../src/meters/meterService");

it("should store and fetch readings against meter id provided", () => {
  storeReadings("testMeterId", [
    { reading: 1, time: 1 },
    { reading: 2, time: 2 },
  ]);

  expect(getSmartMeter("testMeterId").readings).toEqual([
    { reading: 1, time: 1 },
    { reading: 2, time: 2 },
  ]);
});

it("should throw error when readings are invalid", () => {
  expect(() => storeReadings("testMeterId", { reading1: "reading2" })).toThrow(
    "Invalid readings"
  );

  expect(() => storeReadings("testMeterId")).toThrow("Invalid readings");

  expect(() => storeReadings("testMeterId", [])).toThrow("Invalid readings");

  expect(() =>
    storeReadings("testMeterId", [{ reading: "", time: 1 }])
  ).toThrow("Invalid readings");

  expect(() =>
    storeReadings("testMeterId", [{ reading: 2, time: "1" }])
  ).toThrow("Invalid readings");

  expect(() =>
    storeReadings("testMeterId", [
      { reading: 2, time: 1 },
      { reading: 2, time: "1" },
    ])
  ).toThrow("Invalid readings");
});
