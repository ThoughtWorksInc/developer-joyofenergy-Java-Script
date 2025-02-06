const { generate_fake_readings } = require("../../src/repository/readings_repository");

it('should generate n readings', () => {
  const generated_readings = generate_fake_readings(3);

  expect(generated_readings.length).toBe(3)
})

it('should generate readings in orders', () => {
  const generated_readings = generate_fake_readings(3);

  expect(generated_readings[0].time > generated_readings[1].time).toBeTruthy()
  expect(generated_readings[1].time > generated_readings[2].time).toBeTruthy()

  expect(generated_readings[0].reading > generated_readings[1].reading).toBeTruthy()
  expect(generated_readings[1].reading > generated_readings[2].reading).toBeTruthy()
})
