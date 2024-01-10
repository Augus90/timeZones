const { Model, DataTypes } = require("sequelize");

const ZONES_TABLE = "all_zones";

const ZonesSchema = {
  value: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
  },
  Label: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  Group: {
    allowNull: true,
    type: DataTypes.STRING,
  },
};

class Zones extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ZONES_TABLE,
      modelName: "Zones",
      timestamps: false,
    };
  }
}

module.exports = { Zones, ZonesSchema, ZONES_TABLE };
