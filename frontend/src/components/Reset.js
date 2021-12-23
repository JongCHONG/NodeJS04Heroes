import React from 'react'
import { useNavigate } from 'react-router-dom'


const Reset = () => {
  const navigate = useNavigate()

  const handleReset = () => {
    navigate('/')
  }

  return (
    <div className='ms-3'>
      <button type="button" className="btn btn-outline-success" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Reset