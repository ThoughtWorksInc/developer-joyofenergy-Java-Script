const { generateFakeReadings } = require("../src/readings");

it("should generate n readings", () => {
  const generatedReadings = generateFakeReadings(3);

  expect(generatedReadings.length).toBe(3);
});

it("should generate readings in order", () => {
  const generatedReadings = generateFakeReadings(3);

  expect(generatedReadings[0].time > generatedReadings[1].time).toBeTruthy();
  expect(generatedReadings[1].time > generatedReadings[2].time).toBeTruthy();

  expect(
    generatedReadings[0].reading > generatedReadings[1].reading
  ).toBeTruthy();
  expect(
    generatedReadings[1].reading > generatedReadings[2].reading
  ).toBeTruthy();
});
