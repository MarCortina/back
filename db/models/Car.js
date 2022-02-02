const sequelize = require("sequelize");
const db = require("../index");
class Car extends sequelize.Model {}

Car.init(
  {
    marca: { type: sequelize.STRING, allowNull: false },
    modelo: { type: sequelize.STRING, allowNull: false },
    year: { type: sequelize.INTEGER, allowNull: false },
    precio: { type: sequelize.INTEGER, allowNull: false },
  },
  { sequelize: db, modelName: "car" }
);

module.exports = Car;
