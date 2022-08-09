import React from 'react'
import '../App.css'
import {Link} from "react-router-dom";

export default function CockTailItem({idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb, setCardIdentification}) {


  const handleDetails = () =>{
    setCardIdentification(idDrink);
  }



  return (
    <div>
      <div className="card" style={{width: '18rem'}}>
        <img src={strDrinkThumb} className="card-img-top" alt="Img not found"/>
        <div className="card-body">
          <h2 className="card-title">{strDrink}</h2>
          <h4>{strGlass}</h4>
          <h6 className="card-text">{strAlcoholic}</h6>
          <Link onClick={handleDetails} to="/details" className="btn btn-sm px-3 btn-info">Details</Link>
        </div>
      </div>
    </div>
  )
}
