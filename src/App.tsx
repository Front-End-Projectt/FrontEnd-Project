import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Buttons from './Component/Authentication/Buttons'
import Register from './Component/Authentication/Register'
import SignIn from './Component/Authentication/SignIn'
import Diagnosis from './Component/Diagnosis'
import PECS from './Component/PECS/PECS'
import SideNav from './Component/SideNav'

function App() {

  return (
    <>
    
    <SideNav comp={<Buttons/>} children={<PECS/>}/>

    <Routes>
      
      <Route path='SideNav' element={<SideNav comp={<Buttons/>} children={undefined}/>}></Route>
      <Route path='diagnosis' element={<Diagnosis/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='signIn' element={<SignIn/>}></Route>
    </Routes>
    </>
  )
}

export default App
