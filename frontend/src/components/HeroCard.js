import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const HeroCard = () => {
  const { slug } = useParams()
  const [hero, setHero] = useState([])

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:5000/heroes/${slug}`)
        .then(response => response.json())
        .then(data => setHero(data))
    }
  }, [slug])

  if (!hero) {
    return "Chargement..."    
  }
  // const test = hero.power.length
  // console.log(test)
  return (
    <>
      <div 
        className='hero-img'
        style={{ backgroundImage: `url(${hero.image}` }}
      >
      </div>
      <h1>{hero.name}</h1>
      <p>Name : {hero.name}</p>
      <p>Age : {hero.age}</p>
      <p>Status : {hero.isAlive ? "Alive" : "Dead"}</p>
      <p>Color : {hero.color}</p>
      {/* <p>Power : {hero.power.length > 1 ? hero.power : hero.power.join(', ')}</p> */}
    </>
  )
}

export default HeroCard;