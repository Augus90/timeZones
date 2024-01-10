const { Op } = require("sequelize");
const { models } = require("../database/sequelize");

class ZonesSevice {
  constructor() {}

  async find() {
    const response = await models.Zones.findAll();
    return response;
  }

  async findGroup(value) {
    const response = await models.Zones.findAll({
      where: { Group: value },
    });
    return response;
  }

  async findCity(value) {
    const response = await models.Zones.findAll({
      where: {
        Label: {
          [Op.substring]: value,
        },
      },
    });
    return response;
  }
}

module.exports = ZonesSevice;
