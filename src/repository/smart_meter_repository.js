const smartMeters = {};

// smart_meter = {
//  id: 'id of the smart_meter string',
//  price_plan: plan,
//  readings: [{time: number, reading: number}]
// }

const save = smart_meter => {
  if(smart_meter['id'] == null || smart_meter['id'] == undefined) throw new Error("Invalid smart meter")
  smartMeters[smart_meter['id']] = smart_meter;
};

const get_smart_meter = id => smartMeters[id];

module.exports = {
  save,
  get_smart_meter,
};
