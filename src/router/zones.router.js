const { Router } = require("express");
const zonesService = require("../service/zones.service");

const route = Router();
const service = new zonesService();

route.get("/", async function (req, res) {
  const allZones = await service.find();
  res.json(allZones);
});

route.get("/group/:id", async function (req, res) {
  const group = req.params.id;
  const allZones = await service.findGroup(group);
  res.json(allZones);
});

route.get("/city/:id", async function (req, res) {
  const group = req.params.id;
  const allZones = await service.findCity(group);
  res.json(allZones);
});

module.exports = route;
