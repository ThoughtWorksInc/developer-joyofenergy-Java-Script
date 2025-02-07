export default pricePlans = [
  {
    name: "evilEnergyPlan",
    unitPrice: 5,
    surge: {
      days: [1, 2, 5], // 0 - sunday, .. saturday
      multiplier: 10,
    },
  },
  {
    name: "greenEcoPlan",
    unitPrice: 5,
    peakTime: {
      days: [0, 2], // 0 - sunday, .. saturday
      multiplier: 1.2,
    },
  },
  {
    name: "powerForEveryonePlan",
    unitPrice: 2,
    peakTime: {
      days: [0, 1, 2, 3, 4],
      multiplier: 1.1,
    },
  },
];
