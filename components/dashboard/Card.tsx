import React from 'react'

const Card = () => {
  return (
    <div className="card mb-2">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" className="btn btn-primary">Pay Check</button>
        <button type="button" className="btn btn-success">Payed</button>
      </div>
    </div>
  )
}

export default Card