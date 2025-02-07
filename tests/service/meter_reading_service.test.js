const { get_readings, store_readings } = require("../../src/service/meter_readings_service")

it('should store and fetch readings against meter id provided', () => {
  store_readings('test_meter_id', [{ reading: 1, time: 1 }, { reading: 2, time: 2 }])

  expect(get_readings('test_meter_id')).toEqual([{ reading: 1, time: 1 }, { reading: 2, time: 2 }])
})

it('should throw error when readings are invalid', () => {
  expect(() => store_readings('test_meter_id', { 'reading1': 'reading2' }))
    .toThrow('Invalid readings')

  expect(() => store_readings('test_meter_id'))
    .toThrow('Invalid readings')

  expect(() => store_readings('test_meter_id', []))
    .toThrow('Invalid readings')
  
  expect(() => store_readings('test_meter_id', [{reading: '', time: 1}]))
    .toThrow('Invalid readings')

  expect(() => store_readings('test_meter_id', [{reading: 2, time: '1'}]))
    .toThrow('Invalid readings')

  expect(() => store_readings('test_meter_id', [{reading: 2, time: 1},
    {reading: 2, time: '1'}]))
    .toThrow('Invalid readings')
})
