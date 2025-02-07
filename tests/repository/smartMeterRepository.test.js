const {
  getSmartMeter,
  save,
} = require("../../src/repository/smartMeterRepository");

it("should save a given smart meter", () => {
  const testMeter = { id: "test_id" };
  save(testMeter);

  const actualMeter = getSmartMeter("test_id");
  expect(actualMeter).toEqual(testMeter);
});

it("should throw when smart meter is invalid", () => {
  const testMeter = { idz: "test_id" };
  expect(() => save(testMeter)).toThrow("Invalid smart meter");
});

it("should be able to fetch a given smart meter", () => {
  const testMeter = { id: "test_id" };
  save(testMeter);

  const actualMeter = getSmartMeter("test_id");
  expect(actualMeter).toEqual(testMeter);
});
