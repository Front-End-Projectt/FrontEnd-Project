import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Buttons from './Component/Authentication/Buttons'
import Register from './Component/Authentication/Register'
import SignIn from './Component/Authentication/SignIn'
import './App.css'
import Comment from './Component/Community/Comment'
import Diagnosis from './Component/Diagnosis'

import PECS from './Component/PECS/PECS'
import SideNav from './Component/Sidenav'
import NavBar from './Component/NavBar'
import SideNavBar from './Component/Authentication/SideNavBar'
import Teacher from './Component/Teachers/Teacher'

function App() {


  return (
    <>
    
    
     {/* <NavBar/> */}
    <Routes>
      <Route path='SideNav' element={<SideNav comp={<Buttons/>} children={undefined}/>}></Route>
      <Route path='diagnosis' element={<Diagnosis/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='signIn' element={<SignIn/>}></Route>
      <Route path='comment' element={ <Comment/>}></Route>
      <Route path='sid' element={ <SideNavBar/>}></Route>
      <Route path='teacher' element={ <Teacher/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
