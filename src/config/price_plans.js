export default price_plans = [
    {
      name: "evil-energy-plan",
      unit_price: 5,
      surge: {
        days: [1, 2, 5], // 0 - sunday, .. saturday
        multiplier: 10
      }
    },
    {
      name: "green-eco-plan",
      unit_price: 5,
      peak_time: {
        days: [0, 2], // 0 - sunday, .. saturday
        multiplier: 1.2
      }
    },
    {
      name: "power-for-everyone-plan",
      unit_price: 2,
      peak_time: {
        days: [0, 1, 2, 3, 4],
        multiplier: 1.1
      }

    }
  ]
