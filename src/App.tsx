import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HomePage from './Component/SideNav'
import './App.css'
import SideNav from './Component/SideNav'

function App() {

  return (
    <div className="App">
      <SideNav children={undefined}/>
    </div>
  )
}

export default App
