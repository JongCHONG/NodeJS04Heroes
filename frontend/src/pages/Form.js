import React from 'react'

const Form = () => {
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