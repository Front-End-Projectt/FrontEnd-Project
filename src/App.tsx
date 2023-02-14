
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buttons from "./Component/Authentication/Buttons";
import Register from "./Component/Authentication/Register";
import SignIn from "./Component/Authentication/SignIn";
import "./App.css";
import Comment from "./Component/Community/Comment";
import Diagnosis from "./Component/Diagnosis";
import Categories from "./Component/PECS/Categories";
import PECS from "./Component/PECS/PECS";
import SideNav from "./Component/SideNav";
import Hospitals from "./Component/Hospitals/Hospitals";
import Teacher from "./Component/Teachers/Teacher";
import Cards from "./Component/PECS/Cards";
import HospitalsDetails from "./Component/Hospitals/HospitalsDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>

        <Route path="Hospitals" element={ <SideNav comp={undefined} children={<Hospitals />} />}></Route>
        <Route path="Community" element={ <SideNav comp={undefined} children={<Comment />} /> }></Route>
        <Route path="Teachers" element={ <SideNav comp={undefined} children={<Teacher />} /> }></Route>
        <Route path="PECS" element={<SideNav comp={undefined} children={<PECS/>} />}>
            <Route path="Categories" element={<Categories/>}/>
            <Route path="Cards" element={<Cards />}/>
        </Route>
        <Route path="diagnosis" element={<Diagnosis />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="signIn" element={<SignIn />}></Route>

      </Routes>

    </>
  );
}

export default App;
