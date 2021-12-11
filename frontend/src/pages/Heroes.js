import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Hero from '../components/HeroImage'
import HeroCard from '../components/HeroCard'

const Heroes = () => {
  const { slug } = useParams()
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/heroes')
      .then(response => response.json())
      .then(data => setHeroes(data))
  }, [])

  if (!heroes) {
    return "Chargement..."    
  }

  console.log(heroes)
  return (
    <>
      {!slug ? 
      <>
        <h1>The Avengers</h1>
        <div className="row">
          {heroes.map((element, index) => {
            return (
              <Hero 
                key={index} 
                slug={element.slug}
                image={element.image}
              />
            )
          })}
        </div>
      </>
      : 
        <HeroCard />
      }
    </>
  )
}

export default Heroes