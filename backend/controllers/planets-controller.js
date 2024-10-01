const planetsModel = require("../models/planetsModel.js");

const postPlanets = async (req, res) => {
  console.log(req.body);

  const planets = await planetsModel.create(req.body);
  res.send({ data: planets, res: req.body });
};

const getAllPlanets = async (req, res) => {
  const planets = await planetsModel.find();
  res.send({ length: planets.length, data: planets });
};

const getSinglePlanets = async (req, res) => {
  const { planetid } = req.params;
  const planets = await planetsModel.findById(planetid);
  res.send(planets);
};

module.exports = { getAllPlanets, postPlanets, getSinglePlanets };
