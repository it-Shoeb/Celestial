const express = require("express")
const route = express.Router()

const {getAllPlanets, postPlanets, getSinglePlanets} = require('../controllers/planets-controller.js')

route.get("/", getAllPlanets)
route.post("/post", postPlanets)
route.get("/:planetid", getSinglePlanets)

module.exports = route