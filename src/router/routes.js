const express = require("express");
const zonesRouter = require("./zones.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api", router);
  router.use("/timezones", zonesRouter);
}

module.exports = routerApi;
