import React, { useState } from 'react'

const Form = () => {
  const [slug, setSlug] = useState()
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [color, setColor] = useState()
  const [image, setImage] = useState()
  const [power, setPower] = useState()
  const [isAlive, setIsAlive] = useState()
  const [isAdded, setisAdded] = useState(false)
  
  return (
    <form>
      <h1>Create your own Avenger!</h1>
      <div className="mb-3">
        <label className="form-label">Name : </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Age : </label>
        <input type="number" className="form-control" min="1" max="99" />
      </div>
      <div className="mb-3">
        <label className="form-label">Color : </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Image url: </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Power: </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Is he/she alive? : </label>
        <select className="form-select" aria-label="Default select example">
          <option defaultValue="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form