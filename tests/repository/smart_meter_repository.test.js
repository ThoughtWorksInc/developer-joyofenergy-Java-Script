const { get_smart_meter, save } = require("../../src/repository/smart_meter_repository");

it('should save a given smart meter', () => {
  const test_meter = { id: 'test_id' };
  save(test_meter)

  const actual_meter = get_smart_meter('test_id')
  expect(actual_meter).toEqual(test_meter)
});

it('should throw when smart meter is invalid', () => {
  const test_meter = { idz: 'test_id' };
  expect(() => save(test_meter)).toThrow('Invalid smart meter')
});

it('should be able to fetch a given smart meter', () => {
  const test_meter = { id: 'test_id' };
  save(test_meter)

  const actual_meter = get_smart_meter('test_id')
  expect(actual_meter).toEqual(test_meter)
});
