import React from 'react'
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand mx-3" to="/">
            <img src= {process.env.PUBLIC_URL + 'cocktailLogo.png'} alt=""/>
        </Link>
        </nav>
    </div>
  )
}
