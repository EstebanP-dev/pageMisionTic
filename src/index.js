const express = require("express");
const app = express();
const path = require("path");

app.set("puerto", 5000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(app.get("puerto"), () => {
  console.log("Trabajando en el puerto", app.get("puerto"));
});

//RUTAS
app.get("/", (req, res) => {
  res.render("index", { title: "Esteban Navia | MiAPP" });
});
