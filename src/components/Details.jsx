import React from 'react'
import {Link} from "react-router-dom";
import '../App.css'
import Loading from './Loading';

export default function Details({Data, CardIdentification}) {

  let findElement = Data.find(item => item.idDrink === CardIdentification);
  // console.log(findElement);

  return (
    <div>
      <div className="container">

        {findElement.length === 0 ? <Loading /> : <div> <div className="heading text-center m-2">{findElement.strDrink}</div>

        <div className="row m-4">

          <div className="details-img col-md-4 p-0">
            <img src={findElement.strDrinkThumb} alt="no img" />
          </div>

          <div className="content-sec col-md-8">
            <div className="content p-2 m-1 my-1">
              <h3 className='d-inline'>Name: </h3> <h5 className='d-inline'>{findElement.strDrink}</h5>
            </div>
            <div className="content p-2 m-1 my-1">
              <h3 className='d-inline'>Category: </h3> <h5 className='d-inline'>{findElement.strCategory}</h5>
            </div>
            <div className="content p-2 m-1 my-1">
              <h3 className='d-inline'>Info: </h3> <h5 className='d-inline'>{findElement.strAlcoholic}</h5>
            </div>
            <div className="content p-2 m-1 my-1">
              <h3 className='d-inline'>Glass: </h3> <h5 className='d-inline'>{findElement.strGlass}</h5>
            </div>
            <div className="content p-2 m-1 my-1">
              <h3 className='d-inline'>Instructions: </h3> <h5 className='d-inline'>{findElement.strInstructions}</h5>
            </div>
            <div className="content p-2 m-1 my-1">
              <h3 className='d-inline'>Ingredients : </h3> <h5 className='d-inline'>{findElement.strIngredient1}</h5>
            </div>
          </div>

        </div>
        </div> }

        <div className="btn-div d-flex justify-content-center m-3">
          <Link className="btn btn-success px-5" to="/" role="button">Back Home</Link>
        </div>

      </div>
    </div>
  )
}
