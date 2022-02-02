const express = require("express");
const router = express.Router();
const users = require("./users");
const carsRoutes = require("./cars");

router.use("/users", users);
router.use("/cars", carsRoutes);
module.exports = router;
