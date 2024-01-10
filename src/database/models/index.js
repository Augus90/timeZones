const { Zones, ZonesSchema } = require("./timeZones.model");

function setupModels(sequelize) {
  Zones.init(ZonesSchema, Zones.config(sequelize));
}

module.exports = setupModels;
