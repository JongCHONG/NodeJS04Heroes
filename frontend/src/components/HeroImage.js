import React from 'react'
import { Link } from 'react-router-dom'

const Hero = props => {
  const { image, slug } = props

  return (
    <>
        <div 
          className="col-4"
        >
          <Link to={`/heroes/${slug}`}>  
            <div 
              className='hero-img'
              style={{ backgroundImage: `url(${image}` }}
            >
            </div>
          </Link>
        </div>
    </>
  )
}

export default Hero