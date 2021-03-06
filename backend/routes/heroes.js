const express = require("express")
const app = express()

let heroes = require("../heroes")
const reset = require("../reset")

const checkHeroesBody = (req, res, next) => {
  const { name } = req.body

  const hero = heroes.find(element => element.name === name)
  
  if (!hero) {
    next()
  } else {
    res.status(404).send("Existing hero.")
  }
}
const checkHeroesParams = (req, res, next) => {
  const { slug } = req.params

  const hero = heroes.find(element => element.slug === slug)
  console.log(slug);
  if (hero) {
    next()
  } else {
    res.status(404).send("Hero does not exist.")
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

const validateHero = (req, res, next) => {
  // Object.keys permet de recuperer dans un tableau de string
  // toutes les clés de mon objet en parametre
  const allowedKeys = Object.keys(heroes[0])
  const bodyKeys = Object.keys(req.body)
  const invalidKey = bodyKeys.find(key => !allowedKeys.includes(key))

  if (invalidKey) {
    res.status(400).send("Requete invalide")
  } else {
    next()
  }
}

//afficher tous les heroes
app.get("/", (req, res) => {
  res.json(heroes)
})

//afficher l'hero demandé
app.get("/:slug", checkHeroesParams, (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(element => element.slug === slug)

  res.json(hero)
})

//afficher les pouvoirs de l'héro
app.get("/:slug/powers", checkHeroesParams, (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(element => element.slug === slug)

  res.json(hero.power)
})

//ajouter un nouveau hero
app.post("/", checkHeroesBody, validateHero, (req, res) => {
  const hero = req.body

  heroes = [ ...heroes, hero ]

  res.json(heroes)
})

//ajouter un nouveau pouvoir à l'héro
app.put("/:slug/powers", checkHeroesParams, checkAddPower, (req, res) => {
  const { slug } = req.params
  const { power } = req.body

  let hero = heroes.find(element => element.slug === slug)
  hero.power = [...hero.power, power]

  res.json(heroes)
})

//modifier un héro
app.put("/:slug", (req, res) => {
  const { slug } = req.params

  let index = heroes.findIndex(element => element.slug === slug)

  heroes[index] = { ...heroes[index], ...req.body }

  res.json(heroes[index])
})

//Supprimer un héro
app.delete("/:slug", checkHeroesParams, (req, res) => {
  const { slug } = req.params
  const index = heroes.findIndex(element => element.slug === slug)

  heroes.splice(index, 1)
  res.status(204).send("Delete hero succeeded")
})

//supprimer le pouvoir d'un héro
app.delete("/:slug/power/:power", checkHeroesParams, checkDeletePower, (req, res) => {
  const { slug, power } = req.params
  const hero = heroes.find(element => element.slug === slug)
  const index = hero.power.findIndex(element => element === power)

  hero.power.splice(index, 1)
  res.status(204).send("Delete power succeeded")
})

//reset
app.put("/", (req, res) => {
  heroes = reset
  res.json(heroes)
})

module.exports = app