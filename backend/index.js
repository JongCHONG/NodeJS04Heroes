const express = require("express")
const app = express()
const morgan = require ("morgan")
const port = 5000

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