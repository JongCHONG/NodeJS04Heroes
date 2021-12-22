const express = require("express")
const morgan = require ("morgan")
const cors = require("cors")
const app = express()
const port = process.env.port || 5000

//relier back et front
app.use(cors())

//import json
const heroes = require("./routes/heroes")

//accéder à req.body
app.use(express.json())

//middleware gobal des requetes
app.use(morgan('tiny'))

app.use("/heroes", heroes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})