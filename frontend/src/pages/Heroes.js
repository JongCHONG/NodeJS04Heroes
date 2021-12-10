import React, { useEffect, useState } from 'react'

import Hero from '../components/Hero'

const Heroes = () => {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/heroes')
      .then(response => response.json())
      .then(data => setHeroes(data))
  }, [])

  if (!heroes) {
    return "Chargement..."    
  }

  console.log(heroes);
  return (
    <div>
      <Hero />
    </div>
  )
}

export default Heroes