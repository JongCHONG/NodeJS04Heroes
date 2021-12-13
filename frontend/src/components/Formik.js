import React from 'react'

import { useFormik } from 'formik'

const Formik = props => {
  const { name, age, color, isAlive, image, power } = props.editHero

  const formik = useFormik({
    initialValues: {
      name,
      age,
      color,
      image,
      isAlive,
      power,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  // console.log(props.editHero.image)
  return (
    <div>
       <form onSubmit={formik.handleSubmit}>
          <div className="mb-3 d-flex">
            <label htmlFor="name" className="align-self-center form-label me-3" >Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="age" className="align-self-center form-label me-3" >Age</label>
            <input
              id="age"
              name="age"
              type="number"
              min="1"
              max="300"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="isAlive">Is he alive?</label>
            <select className="form-select" >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="color" className="align-self-center form-label me-3" >Color</label>
            <input
              id="color"
              name="color"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.color}
            />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="image" className="align-self-center form-label me-3" >Image url</label>
            <input
              id="image"
              name="image"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.image}
            />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="power" className="align-self-center form-label me-3" >Power</label>
            {power.map((element, index) => 
              <input
                key={element}
                id={`power[${index}]`}
                name={`power[${index}]`}
                type="text"
                className="form-control me-3"
                onChange={formik.handleChange}
                value={element}
              />
            )}
          </div>

          <button className="btn btn-outline-success" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Formik