import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Details from "./components/Details";
import NavBar from "./components/NavBar";
import ParentComponent from "./components/ParentComponent";

function App() {

  const [Data, setData] = useState([]);
  const[CardIdentification, setCardIdentification] = useState('null');
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  
  useEffect(()=>{
    axios.get(url)
        .then((response) => 
        {
          setData(response.data.drinks);
        })
        .catch((err) =>
        {
          console.log(err);
        })
  },[url])

  return (
    <div>
      <Router>
        <NavBar /> 
        <Routes>
          <Route exact path="/" element={<ParentComponent Data={Data} setCardIdentification={setCardIdentification}/>} />
          <Route exact path="/details" element={<Details Data={Data} CardIdentification={CardIdentification} />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
