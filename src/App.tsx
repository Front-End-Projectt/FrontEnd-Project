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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route
          path="/الرئيسية"
          element={<SideNav comp={undefined} children={undefined} />}></Route>
        <Route
          path="المستشفيات"
          element={
            <SideNav comp={<Hospitals />} children={<Hospitals />} />
          }></Route>
        <Route
          path="المجتمع"
          element={
            <SideNav comp={<Comment />} children={<Comment />} />
          }></Route>
        <Route
          path="بطاقات الطلب"
          element={
            <SideNav comp={<Buttons />} children={<Categories />} />
          }></Route>
        <Route path="diagnosis" element={<Diagnosis />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="signIn" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
