const express = require("express")
const app = express()

let heroes = require("../heroes")

const checkHeroes = (req, res, next) => {
  const { slug } = req.params
  const hero = heroes.find(element => element.slug === slug)

  if (!hero) {
    res.status(404).send("Not found")
  } else {
    next()
  }
}

app.get("/", (req, res) => {
  res.json(heroes)
})

app.get("/:slug", (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(element => element.slug === slug)

  res.json(hero)
})

app.get("/:slug/powers", (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(element => element.slug === slug)

  res.json(hero.power)
})

app.post("/", checkHeroes, (req, res) => {
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

app.delete("/:slug", checkHeroes, (req, res) => {
  const { slug } = req.params
  const index = heroes.findIndex(element => element.slug === slug)

  heroes.splice(index, 1)
  res.status(204).send("Delete success")
})

module.exports = app