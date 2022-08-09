import React from 'react'
import '../App.css'

export default function HomaPage() {
  return (
    <div className='row HomePage container-fluid m-0 p-2'>
        
      <div className="HomePage-img col-2 p-0">
        <img src={process.env.PUBLIC_URL + 'home-img.png'} alt="" />
      </div>

      <div className="HomePage-text col-8">
        <h1>Welcome to TheCocktailDB</h1>
        <p>Popular Drinks & Ingredients</p>
      </div>

      <div className="HomePage-img col-2 p-0">
        <img src={process.env.PUBLIC_URL + 'home-img.png'} alt="" />
      </div>

    </div>
  )
}
