const express = require("express");
const route = express.Router();
const { Car, User } = require("../db/models");

route.post("/", (req, res) => {
  const { marca, modelo, precio, year, userId } = req.body;
  User.findByPk(userId)
    .then((user) => {
      if (!user) return res.status(404).send("Seleccione un usuario");
      const owner = {
        name: user.name,
        lastname: user.lastname,
        id: user.id,
      };
      Car.create({ marca, modelo, precio, year })
        .then((car) => car.setUser(user))
        .then((car) => res.send({ ...car.dataValues, user: owner }));
    })
    .catch((err) => res.status(500).send(err));
});

route.get("/:id", (req, res) => {
  Car.findByPk(req.params.id, { include: User }).then((car) => res.send(car));
});

route.get("/", (req, res) => {
  Car.findAll({ include: User })
    .then((cars) => res.status(200).send(cars))
    .catch((e) => console.log(e));
});

module.exports = route;
