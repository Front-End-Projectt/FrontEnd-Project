import { useState } from 'react'
import HomePage from './Component/SideNav'
import './App.css'
import SideNav from './Component/SideNav'
import PECS from './Component/PECS/PECS'
import Categories from './Component/PECS/Categories'
// import { useState } from 'react';


  
  
  function App() {
    

  return (
    <>
      <SideNav children={<PECS/>}/>
    </>
  )
}

export default App
