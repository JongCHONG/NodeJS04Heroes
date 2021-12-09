const express = require("express")
const app = express()

let heroes = require("../heroes")

app.get("/", (req, res) => {
  res.json(heroes)
})

app.get("/:slug/powers", (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(element => element.slug === slug)

  res.json(hero.power)
})

app.post("/", (req, res) => {
  const hero = req.body
  heroes = [ ...heroes, hero ]

  res.json(heroes)
})

app.put("/:slug/powers", (req, res) => {
  const { slug } = req.params
  const { power } = req.body
  let hero = heroes.find(element => element.slug === slug)
  hero.power = [...hero.power, power]

  // console.log(hero)
  res.json(heroes)
})

module.exports = app