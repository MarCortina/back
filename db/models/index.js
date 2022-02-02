const User = require("./User");
const Car = require("./Car");
const db = require("../index");

Car.belongsTo(User);
User.hasMany(Car);

module.exports = { db, User, Car };
