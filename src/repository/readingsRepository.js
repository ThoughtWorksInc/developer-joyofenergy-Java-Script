const nextPositiveNumber = () => Math.ceil(Math.random() * 10);

const generateFakeReadings = (numberOfReadings) => {
  let nowInMillis = new Date().getTime();
  const initialReadings = [
    { time: nowInMillis - numberOfReadings * (60 * 1000), reading: 1 },
  ];
  if (numberOfReadings === 1) return initialReadings;
  if (numberOfReadings <= 0) return [];

  return new Array(numberOfReadings - 1).fill(1).reduce((readingsSoFar, _) => {
    // hacky range impl
    return [
      {
        time: readingsSoFar[0].time + 60 * 1000,
        reading: readingsSoFar[0].reading + nextPositiveNumber(),
      },
      ...readingsSoFar,
    ];
  }, initialReadings);
};

module.exports = { generateFakeReadings };
