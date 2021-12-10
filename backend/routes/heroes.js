const express = require("express")
const app = express()

let heroes = require("../heroes")

const checkHeroes = (req, res, next) => {
  const { slug } = req.params
  const hero = heroes.find(element => element.slug === slug)

  if (!hero) {
    res.status(404).send("Existing hero")
  } else {
    next()
  }
}

const checkAddPower = (req, res, next) => {
  const { slug } = req.params
  const { power } = req.body
  const hero = heroes.find(element => element.slug === slug)
  const heroPower = hero.power.find(element => element === power)
  //includes

  if (heroPower) {
    res.status(404).send("Power already added.")
  } else {
    next()
  }
}

// const checkPower = (req, res, next) => {
//   const { slug } = req.params
//   const hero = heroes.find(element => element.slug === slug)
//   if (req.body) {
//     const { power } = req.body
//   } else {
//     const { power } = req.params
//   }
//   const heroPower = hero.power.find(element => element === power)
//   //includes

//   if (heroPower && req.body) {
//     res.status(404).send("Power already added.")
//   } else if (!heroPower && !body) {
//     res.status(404).send("Hero n'a pas ce pouvoir")
//   } else {
//     next()
//   }
// }

const checkDeletePower = (req, res, next) => {
  const { slug, power } = req.params
  const hero = heroes.find(element => element.slug === slug)
  const heroPower = hero.power.find(element => element === power)
  //includes

  if (!heroPower) {
    res.status(404).send("Hero n'a pas ce pouvoir")
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

app.put("/:slug/powers", checkAddPower, (req, res) => {
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
  res.status(204).send("Delete hero succeeded")
})

app.delete("/:slug/power/:power", checkHeroes, checkDeletePower, (req, res) => {
  const { slug, power } = req.params
  const hero = heroes.find(element => element.slug === slug)
  const index = hero.power.findIndex(element => element === power)

  hero.power.splice(index, 1)
  res.status(204).send("Delete power succeeded")
})

module.exports = app