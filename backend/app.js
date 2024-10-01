const express = require('express')
const cors = require('cors')
const app = express()

const mongoDB = require('./config/mongoose-connection.js')

const getPlanets = require("./routers/getPlanets.js")

app.use(cors())
app.use(express.json())

app.use('/planets', getPlanets)

app.post("/postPlanet", (req, res) => {
    res.send('working')
})

app.listen(5500, () => {
    console.log("server running");
})