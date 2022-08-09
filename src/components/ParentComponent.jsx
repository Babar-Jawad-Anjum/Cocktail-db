import React from 'react'
import HomePage from "./HomePage";
import CockTails from './CockTails';

export default function ParentComponent({Data,setCardIdentification}) {
  return (
    <div>
      <HomePage />
      <CockTails Data={Data} setCardIdentification={setCardIdentification}/>
    </div>
  )
}
