const pricePlanNames = {
  PLAN_1: "price-plan-1",
  PLAN_2: "price-plan-2",
  PLAN_3: "price-plan-3",
};

const supplierNames = {
  DR_EVILS_DARK_ENERGY_ENERGY_SUPPLIER: "Dr Evil's Dark Energy",
  THE_GREEN_ECO_ENERGY_SUPPLIER: "The Green Eco",
  POWER_FOR_EVERYONE_ENERGY_SUPPLIER: "Power for Everyone",
};

const pricePlans = {
  [pricePlanNames.PLAN_1]: {
    supplier: supplierNames.DR_EVILS_DARK_ENERGY_ENERGY_SUPPLIER,
    rate: 10,
  },
  [pricePlanNames.PLAN_2]: {
    supplier: supplierNames.POWER_FOR_EVERYONE_ENERGY_SUPPLIER,
    rate: 2,
  },
  [pricePlanNames.PLAN_3]: {
    supplier: supplierNames.THE_GREEN_ECO_ENERGY_SUPPLIER,
    rate: 1,
  },
};

module.exports = { pricePlans, pricePlanNames };
