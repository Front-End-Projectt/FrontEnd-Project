import SideNav from './Component/SideNav'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Diagnosis from './Component/Diagnosis'

function App() {

  return (
    <>
      <SideNav children={undefined}/>
    <Routes>
      <Route path='diagnosis' element={<Diagnosis/>}></Route>
    </Routes>
    </>
  )
}

export default App
