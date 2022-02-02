const express = require("express");
const router = express.Router();
const { User, Car } = require("../db/models");

router.get("/", (req, res, next) => {
  User.findAll().then((users) => res.send(users));
});

router.post("/", (req, res, next) => {
  User.create(req.body).then((user) => res.send(user));
});

router.get("/:id", (req, res, next) => {
  User.findByPk(req.params.id, { include: Car }).then((user) => res.send(user));
});

module.exports = router;
