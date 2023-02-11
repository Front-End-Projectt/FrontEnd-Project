import SideNav from './Component/SideNav'
import { Route, Routes } from 'react-router-dom'
import Diagnosis from './Component/Diagnosis'
import Register from './Component/Authentication/Register'
import SignIn from './Component/Authentication/SignIn'
import Buttons from './Component/Authentication/Buttons'
import './App.css'
import Comment from './Component/Community/Comment'
function App() {

  return (
    <>
    <Routes>
      
      <Route path='SideNav' element={<SideNav comp={<Buttons/>} children={undefined}/>}></Route>
      <Route path='diagnosis' element={<Diagnosis/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='signIn' element={<SignIn/>}></Route>
      <Route path='comment' element={ <Comment/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
