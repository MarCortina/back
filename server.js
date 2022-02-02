const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./routes");
const { db } = require("./db/models/index");
const path = require("path");
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use(express.static(__dirname + "/public"));

app.use("/api", routes);

app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Escuchando en el puerto ", PORT);
  });
});
