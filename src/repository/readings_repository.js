const next_positive_number = () => Math.ceil(Math.random() * 10);

const generate_fake_readings = number_of_readings => {
  let now_in_millis = new Date().getTime();
  const initial_readings = [{ time: now_in_millis - (number_of_readings * (60 * 1000)), reading: 1 }];
  if (number_of_readings == 1) return initial_readings;
  if (number_of_readings <= 0) return [];

  return new Array(number_of_readings - 1).fill(1).reduce((readings_so_far, _) => { // hacky range impl
    return [{
      time: readings_so_far[0].time + 60 * 1000,
      reading: readings_so_far[0].reading + next_positive_number()
    },
    ...readings_so_far
    ]
  }, initial_readings)

};

module.exports = { generate_fake_readings }
